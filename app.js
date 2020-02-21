const express = require('express')
const app = express()

// configuration
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// routes
app.use('/api/auth', require('./routes/auth.routes'))

app.listen(5000, () => {
  console.log('App is running on port 5000!')
})