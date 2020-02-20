const express = require('express')
const app = express()

app.disable('x-powered-by');

app.use('/api/auth', require('./routes/auth.routes'))
app.get('/', (req, res) => {
  res.send("Index route")
})

app.listen(5000, () => {
  console.log('App is running on port 5000!')
})