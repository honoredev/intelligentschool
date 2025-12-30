const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const hostname = '0.0.0.0'

console.log(`🚀 Starting Next.js server on ${hostname}:${port}`)

const app = next({
  dev: false,
  hostname,
  port,
  dir: __dirname
})

const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = createServer((req, res) => {
      handle(req, res, parse(req.url, true))
    })

    server.listen(port, hostname, (err) => {
      if (err) {
        console.error('❌ Server failed to start:', err)
        process.exit(1)
      }
      console.log(`✅ Server ready on http://${hostname}:${port}`)
    })

    server.on('error', (err) => {
      console.error('❌ Server error:', err)
    })
  })
  .catch((err) => {
    console.error('❌ Failed to prepare Next.js app:', err)
    process.exit(1)
  })