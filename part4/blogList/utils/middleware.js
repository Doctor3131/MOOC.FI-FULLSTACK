const morgan = require('morgan')
const logger = require('./logger')

morgan.token('body', (request) => JSON.stringify(request.body))

const Morgan = morgan(':method :url :status :body')

const errorHandler = (error, request, response, next) => {
  logger.info(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformated id' })
  }

  next(error)
}

module.exports = { Morgan, errorHandler }