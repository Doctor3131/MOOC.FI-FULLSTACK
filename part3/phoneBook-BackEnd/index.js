const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(express.json())

morgan.token('body', (request) => JSON.stringify(request.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Hello world</h1>')
})

app.get('/api/info', (request, response) => {
    const total = persons.length
    const date = new Date()

    response.send(`<p>Phonebook has info for ${total} people</p>
                   <p>${date.toString()}</p>`)
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})


app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  const person = persons.find(person => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  persons = persons.filter(person => 
    person.id !== id)

  response.status(204).end()
})

const generateId = () => {
  const maxId = Math.random() * (1000 - 0) + 0
  return String(maxId)
}

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body || !body.name) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  let checkName = persons.find(person => 
    person.name === body.name)

  let checkNumber = persons.find(person => 
    person.number === body.number
  )

  if (checkName) {
    return response.status(400).json({
      error: 'name must be unique'
    })
  }

  if (checkNumber) {
    return response.status(400).json({
      error: 'number must be unique'
    })
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number
  }

  persons = persons.concat(person)

  response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})