const koa = require('koa')
const send = require('koa-send')
const serve = require('koa-static')
const path = require('path')

const app = koa()

app.use(serve(path.join(__dirname, 'public')))

app.use(function *() {
  const root = path.join(__dirname, 'index.html')
  yield send(this, this.path, { root })
})

const port = process.env.PORT || 3000
console.log(`Good stuff is happening on port: ${port}`)
app.listen(port)
