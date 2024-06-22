import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/Input/Input";
import Navbar from "../../components/Navbar/Navbar";
import { Container } from "../Home/HomeCliente/HomeClienteStyled";
import { useForm } from 'react-hook-form'
import SearchSchema from '../../schemas/SearchSchema.js'
import { DivPesquisa, Produtos } from "./PedidoStyled.jsx";
import Button from "../../components/Button/Button.jsx";
import { ErrorSpan } from "../Auth/AuthStyled.jsx";
import { useState } from "react";
import { findProdutoByCategory } from "../../services/pedidoService.js";

function Pedido(){
    
    const [ produtos, setPodutos ] = useState([])
    const [ produtoCategory, setProdutoCategory ] = useState('')

    const { register: searchRegister, handleSubmit: searchSubmit, formState: {errors: searchErrors}} = useForm({
        resolver: zodResolver(SearchSchema),
        defaultValues: {
            itemPesquisa: ''
        }
    })

    async function handleCategoryClick(category){
        setProdutoCategory(category)
        try{
            const response = await findProdutoByCategory(category) 
            setPodutos(response.data);
        }catch(err){
            console.log(err)
        }
    }

    function searchHandleSubmit(){
        //
    }

    return(
        <>
            <Navbar />
            <Container>
                <DivPesquisa>
                    <form onSubmit={searchSubmit(searchHandleSubmit)}>
                        <Input 
                            type='text'
                            placeholder='oque você gostaria?'
                            name='itemPesquisa'
                            defaultValue=''
                            register={searchRegister}
                        />
                        
                        <Button
                            type='submit'
                            text='pesquisar'
                        />

                        {searchErrors.itemPesquisa && <ErrorSpan> {searchErrors.itemPesquisa.message} </ErrorSpan>}
                    </form>
                </DivPesquisa>

                <Produtos>
                    <a onClick={() => handleCategoryClick('Cervejas')}>Cervejas....</a>
                    <a onClick={() => handleCategoryClick('Bebidas')}>Demais Bebidas....</a>
                    <a onClick={() => handleCategoryClick('Espetos')}>Espetos....</a>
                    <a onClick={() => handleCategoryClick('Porcoes')}>Porções....</a>

                    {produtoCategory && (
                        <div>
                            <h2> {produtoCategory} </h2>
                            {produtos.length > 0 ? (
                                produtos.map(produ => (
                                    <p key={produ._id}> {`${produ.nomeProduto}... R$${produ.valorProduto}`} </p>
                                ))
                            ) : (
                                <p>carregando...</p>
                            )}
                        </div>
                    )}
                    
                    <div className="carrinho">
                        <h2>Carrinho:</h2>
                    </div>
                </Produtos>

                
            </Container>

            
        </>
    )
}

export default Pedido;