const path = require('path')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send({
    title: 'Hello World! HAHA'
  })
})

app.listen(3001, err => {
  if (err) throw err

  console.log('Start server at 3001')
})