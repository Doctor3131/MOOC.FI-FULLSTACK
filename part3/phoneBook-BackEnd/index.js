require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const Person = require('./models/person')

app.use(express.json())
app.use(express.static("dist"))

morgan.token('body', (request) => JSON.stringify(request.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.get('/', (request, response) => {
    response.send('<h1>Hello world</h1>')
})

app.get('/api/info', (request, response) => {
    Person.find({})
      .then(persons => {
        const total = persons.length
        const date = new Date()
        response.send(`<p>Phonebook has info for ${total} people</p>
          <p>${date.toString()}</p>`)
      })
})

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then(person => {
    response.json(person)
  })
})

app.delete('/api/persons/:id', (request, response) => {
  Person.findByIdAndDelete(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => {
      console.log(error)
      response.status(400).send({error: 'malformatted id'})
    })
})

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body || !body.name) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  // let checkName = persons.find(person => 
  //   person.name === body.name)

  // let checkNumber = persons.find(person => 
  //   person.number === body.number
  // )

  // if (checkName) {
  //   return response.status(400).json({
  //     error: 'name must be unique'
  //   })
  // }

  // if (checkNumber) {
  //   return response.status(400).json({
  //     error: 'number must be unique'
  //   })
  // }

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save().then(savePerson => {
    response.json(savePerson)
  })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})