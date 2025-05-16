const express = require('express')
const mongoose = require('mongoose')
const logger = require('./utils/logger')
const config = require('./utils/config')
const notesRouter = require('./controllers/blogs')
const middleware = require('./utils/middleware')

const app = express()

const mongoUrl = config.MONGODB_URI

logger.info('connecting to MongoDB...')
mongoose.connect(mongoUrl)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.info('error connecting to MongoDB:', error.message)
  })

app.use(express.json())
app.use(middleware.Morgan)
app.use('/api/blogs', notesRouter)
app.use(middleware.errorHandler)

module.exports = app