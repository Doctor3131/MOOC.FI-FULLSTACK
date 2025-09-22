require('dotenv').config()
const express = require('express')

app.use(express.static('dist'))
app.use(express.json())
const app = express()

const requestLogger = (req, res, next) => {
  console.log('Method:  ', req.method)
  console.log('Path:    ', req.path)
  console.log('Body:    ', req.Body)
}


app.use(requestLogger)

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

app.get('/api/notes', (req, res) => {
  noteSchema.findById(request.params.id)

})

