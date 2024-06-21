import axios from "axios"

const baseUrl = 'http://localhost:3000'

export async function cadastrarProdutoService(data){
    try{
        const response = axios.post(`${baseUrl}/produto/cadastrarProduto`, data)
        if(!response){
            return {produto: response, status: false}
        }

        return {produto: response, status: true}
    }catch(err){
        console.log(err)
    }
}