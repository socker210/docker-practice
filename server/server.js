const path = require('path')
const express = require('express')

const app = express()

app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')))

app.listen(3001, err => {
  if (err) throw err

  console.log('Start server at 3001')
})