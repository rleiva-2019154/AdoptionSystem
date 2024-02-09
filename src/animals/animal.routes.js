import express from "express"
import { test, registerAnimal } from './animal.controller.js'

const api = express.Router()

api.get('/test', test)
api.post('/registerAnimal', registerAnimal)

export default api