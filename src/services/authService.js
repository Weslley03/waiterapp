import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export async function login(data){
    try{
        const response = await axios.post(`${baseUrl}/auth/login`, data)
        return response;
    }catch(err){
        if(err.response){
            throw new Error(err.response.data.message || 'erro desconhecido')
        } else if(err.request) {
            throw new Error('sem resposta do servidor')
        } else{
            throw new Error(`erro ao fazer a req, ${err.message}`)
        }
    }   
}