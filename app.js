const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.setHeader('Set-Cookie', 'isLoggedIn=true')
  res.send('hello get working')
})

app.get('/anotherPath', (req, res) => {
  const Cookie = req.get('Cookie')
  console.log(Cookie)
  res.send('anotherPage')
})

app.listen('8888', () => {
  console.log('app is running on port8888')
})