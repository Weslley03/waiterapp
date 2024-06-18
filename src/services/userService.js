import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export function cadastrar(data){
    try{
        const response = axios.post(`${baseUrl}/entrar/cadastrar`, data)
        return response;
    }catch(err){
        console.log(`houve um erro no userService front`, err)
    }
}

export function login(data){
    try{
        
    }catch(err){
        console.log(`houve um erro no userService front`, err)
    }   
}