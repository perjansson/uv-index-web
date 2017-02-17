const koa = require('koa')
const send = require('koa-send')
const path = require('path')

const app = koa()

app.use(function *() {
  const root = path.join(__dirname, '../../app/client/index.html')
  yield send(this, this.path, { root })
})

app.listen(8080)
