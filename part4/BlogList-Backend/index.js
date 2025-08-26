const app = require('./app.js')
const logger = require('./utils/logger.js')
const config = require('./utils/config.js')

const PORT = config.PORT
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})
