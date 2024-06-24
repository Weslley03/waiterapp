import axios from "axios";

const baseURl = 'http://localhost:3000'

export async function findProdutoByCategory(category){
    try{
        const response = axios.get(`${baseURl}/produto/ProdutoCategoria`, {
            params: { category }
        })
        return response;    
    }catch(err){
        console.log(err)
    }
}

export async function findProdutoByNameService({nome}){
    try{
        const response = await axios.get(`${baseURl}/produto/produtoNome?nome=${nome}`)
        return response;
    }catch(err){
        if(err.response){
            throw new Error(err.response.data.message || 'erro desconhecido')
        } else if(err.request){
            throw new Error('sem resposta do servidor')
        } else{
            throw new Error('gouve um erro na req', err.message)
        }
    }
}