const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')))

app.listen(3001, err => {
  if (err) throw err

  console.log('server start at 3001')
})