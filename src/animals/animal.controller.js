'user strict'

import Animal from './animal.model.js'


export const test =(req, res)=>{
    console.log('test is running')
    return res.send({message: 'Test is running'})
}

export const registerAnimal = async(req, res)=>{
    try {
        let data = req.body
        let animal = new Animal(data)
        await animal.save()
        return res.send({message: `Successfully added, the animal with the name was added ${animal.name}`})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'error when adding animal', err: err})
    }
}

