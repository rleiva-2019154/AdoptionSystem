import mongoose, { Schema } from "mongoose"

const animalSchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
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
        type: Schema.ObjectId, // mongoose.Schema.Types.ObjectId
        ref: "user",
        unique: true,
        required: true
    }
})

export default mongoose.model('animal', animalSchema)