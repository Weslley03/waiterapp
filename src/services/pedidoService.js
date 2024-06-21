import axios from "axios";

const baseURl = 'http://localhost:3000'

export async function findProdutoByCategory(category){
    try{
        const response = axios.get(`${baseURl}/`)
        return response;    
    }catch(err){
        console.log(err)
    }
}