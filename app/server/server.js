const koa = require('koa')
const send = require('koa-send')
const path = require('path')

const app = koa()

app.use(function *() {
  const root = path.join(__dirname, '../../app/client/index.html')
  yield send(this, this.path, { root })
})

const port = process.env.PORT || 8080
console.log(`Good stuff is happening on port: ${port}`)
app.listen(port)
