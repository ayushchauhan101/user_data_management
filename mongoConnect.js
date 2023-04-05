const mongoose = require('mongoose')
require('dotenv').config()

const my_password = (process.env.PASSWORD)

async function main() {
    console.log('trying to connect...')
    await mongoose.connect(`mongodb+srv://ayush:${my_password}@cluster0.4vg9aiz.mongodb.net/?retryWrites=true&w=majority`)
    console.log('connected to mongoDB server ...')

}
main()

module.exports = main