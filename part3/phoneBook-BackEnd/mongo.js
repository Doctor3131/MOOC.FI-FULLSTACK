const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument');
    process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://sirielfahri:${password}@cluster0.zyhqphw.mongodb.net/personApp?retryWrites=true&w=majority&appName=Cluster0`
mongoose.set('strictQuery', false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({ name: String, number: String, })

if (process.argv.length === 3) {
    const Person = mongoose.model('Person', personSchema)

    Person.find({}).then(result => {
        console.log('phonebook:')
        result.forEach(person => {
            console.log(`${person.name} ${person.number}`)
        })
        mongoose.connection.close()
    })
} else {
    const Person = mongoose.model('Person', personSchema)
    const nameInput = process.argv[3]
    const numberInput = process.argv[4]

    const person = new Person({
        name: nameInput,
        number: numberInput,
    })
    
    person.save().then(result => {
        console.log(`added ${nameInput} ${numberInput} to phonebook`)
        mongoose.connection.close()
    })
}


