const app = require('./app.js')
const express = require('express')
const mongoose = require('mongoose')
const config = require('./utils/config.js')

const PORT = config.PORT
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})
