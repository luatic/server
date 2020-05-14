const express = require('express')
const app = express()
const PORT = process.env.PORT || 1212

app.get('/', (req, res) => {
  res.send({hi: 'dupa'})
})
app.listen(PORT)
