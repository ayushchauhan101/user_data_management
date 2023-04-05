const express = require('express')
const userRouter = express.Router()
const User = require('../models/userModel')

userRouter.get('/', async (req, res) => {
    const result = await User.find({})
    res.json(result)
})

userRouter.post('/', async (req, res) => {
    const { name, number, email, hobbies } = req.body

    const new_user = new User({
        name,
        number,
        email,
        hobbies
    })

    try {
        const savedUser = await new_user.save()
        res.status(200).json(savedUser)
    } catch (err) {
        if (err.name === 'MongoError' || err.code === 11000) {
            res.status(400).json({ error: 'this user already exist!' })
        } else {
            res.status(400).end()
        }
    }
})

userRouter.get('/:id', async (req, res) => {
    const result = await User.findById(req.params.id)
    try{
        res.status(200).json(result)
    }catch(err){
        res.status(400).json({error: err.message})
    }
})

userRouter.delete('/:id', async(req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).end()
})

userRouter.put('/:id', async(req,res) => {
    const body = req.body

    const update = {
        name: body.name,
        number: body.number,
        email: body.email,
        hobbies: body.hobbies,
    }

    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, update, {new: true})
        res.status(200).json(updatedUser)
    }catch(err){
        res.status(400).json({error: err.message})
    }
})

module.exports = userRouter