'use strict'

import User from './user.model.js'
import { encrypt, checkPassword } from '../utils/validator.js'

export const test =(req, res)=>{
    console.log('test is running')
    return res.send({message: 'Test is running'})
}

export const register = async(req, res) => {
    try{
        //Capturar el formario (body)
        let data = req.body
        console.log(data)
        //Encriptar la constraseña 
        data.password = await encrypt(data.password)
        //Asignar el rol por defecto 
        data.role = 'CLIENT'
        //Guardar la información en la DB
        let user = new User(data)
        await user.save()
        //Responder al usuario  
        return res.send({message: `Register successfully, can be logged with email use ${user.username}`})
    }catch(err){    
        console.log(err)
        return res.status(500).send({message: 'Error registering user', err: err})
    }
}

export const login = async(req, res)=>{
    try{
        //Capturar los datos (body)
        let { username, password } = req.body
        //Validar que el usuario exista
        let user = await User.findOne({username}) //buscar un solo registro. username: 'jmolina'
        //Verificar que la contraseña coincida
        if(user && await checkPassword(password, user.password)){
            let loggedUser = {
                username: user.username,
                name: user.name,
                role: user.role
            }
            return res.send({message: `Welcome ${loggedUser.name}`, loggedUser})
        }
        //Responde al usuario
        return res.status(404).send({message: 'Invalid credentials'})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error to login'})
    }
}