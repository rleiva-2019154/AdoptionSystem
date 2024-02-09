import mongoose from "mongoose"
import User from "./user.model.js"

const animalSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        trype: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    keeper: { 
        type: Schema.ObjectId, 
        ref: "User"
    }
})

export default mongoose.model('animal', animalSchema)