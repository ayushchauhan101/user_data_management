const express = require('express')
const cors = require('cors')
require('./mongoConnect')

const userRouter = require('./routes/userRoutes')

const app = express()

app.use(cors())
app.use(express.json())
// homepage welcome
app.use('/users', userRouter)

// routing to users
app.get('/', async(req, res) => {
    res.json({message: 'welcome to user homepage'})
})


const PORT = process.env.PORT
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)})