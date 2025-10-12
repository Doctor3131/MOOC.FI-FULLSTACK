const config = require('./utils/config')
const mongoose = require('mongoose')

// if (process.argv.length < 3) {
//   console.log('give password as argument')
//   process.exit(1)
// }

const url = config.MONGODB_URI

console.log(url)

mongoose.set('strictQuery', false)

mongoose.connect(url)

// const noteSchema = new mongoose.Schema({
//   content: String,
//   important: Boolean,
// })

// const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//   content: 'HTML is easy',
//   important: true,
// })
//
// note.save()
//   .then(result => {
//     console.log('note saved!')
//     mongoose.connection.close()
//   })

const Note = mongoose.model('Note', new mongoose.Schema({}))

Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})
