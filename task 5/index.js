import { connect } from 'mongoose'
import express from 'express'
import userRouter from './routes/user.route.js'

connect("mongodb+srv://revan:revan4141@cluster0.aeevlra.mongodb.net/?retryWrites=true&w=majority")

const app = express()

app.use(express.json())

app.use('/user', userRouter)

app.listen(6000, () => console.log('server is up ...'))

