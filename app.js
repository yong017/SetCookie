const express = require('express')
const session = require('express-session')

const app = express()
app.use(
  session({
    secret: 'sndkfnofnosfpowekmprwjqlierjw',
    // 代表在每次與使用者互動後，不會強制把 session 儲存，除非 session 有變動
    resave: false,
    saveUninitialized: false
  }

  ))

app.get('/', (req, res) => {
  res.setHeader('Set-Cookie', 'isLoggedIn=true')
  res.send('hello get working')
})

app.get('/anotherPath', (req, res) => {
  const Cookie = req.get('Cookie')
  console.log(Cookie)
  console.log(req.session.isLoggedIn)
  res.send('anotherPage')
})

// 以登入例子做設定，在登入後儲存 session data
app.post('/login', (req, res) => {
  // 在 session 物件上新增 key 和 value
  req.session.isLoggedIn = true
  res.redirect('/')
})

app.listen('8888', () => {
  console.log('app is running on port8888')
})