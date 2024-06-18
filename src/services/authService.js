import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export function login(data){
    try{
        const response = axios.post(`${baseUrl}/auth/login`, data)
        return response;
    }catch(err){
        console.log(`houve um erro no userService front`, err)
    }   
}