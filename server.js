import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const isProd = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 5173
const base = '/'

async function createApp() {
  const app = express()
  let vite

  if (!isProd) {
    const { createServer } = await import('vite')
    vite = await createServer({
      server: { middlewareMode: true },
      appType: 'custom',
      base,
    })
    app.use(vite.middlewares)
  } else {
    app.use(base, express.static(path.resolve(__dirname, 'dist/client'), { index: false }))
  }

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl || '/'
      let template
      let render

      if (!isProd) {
        template = await fs.readFile(path.resolve(__dirname, 'index.html'), 'utf-8')
        template = await vite.transformIndexHtml(req.originalUrl, template)
        ;({ render } = await vite.ssrLoadModule('/src/entry-server.jsx'))
      } else {
        template = await fs.readFile(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8')
        ;({ render } = await import('./dist/server/entry-server.js'))
      }

      const appHtml = render(url)
      const html = template.replace('<!--ssr-outlet-->', appHtml)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (error) {
      vite?.ssrFixStacktrace(error)
      console.error(error)
      res.status(500).end(error.stack)
    }
  })

  return app
}

createApp().then((app) => {
  app.listen(port, () => {
    console.log(`SSR server running at http://localhost:${port}`)
  })
})
