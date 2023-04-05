require('./mongo')
const mongoose = require('mongoose')
const User = require('./model')

const newUser = {
    name: 'mudryk',
    number: 237920934,
    email: 'mm@mail.com',
    hobbies: ['dancing', 'football', 'music']
}

async function save() {
    await User.insertMany(newUser)
    console.log(newUser)
    mongoose.connection.close()
}
// save()

async function search(){
    const result = await User.find({})
    console.log(result)
    mongoose.connection.close()
}
search()