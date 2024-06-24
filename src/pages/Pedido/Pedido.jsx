import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/Input/Input";
import Navbar from "../../components/Navbar/Navbar";
import { Container } from "../Home/HomeCliente/HomeClienteStyled";
import { useForm } from 'react-hook-form'
import SearchSchema from '../../schemas/SearchSchema.js'
import { DivPesquisa, Produtos, ButtonCompo } from "./PedidoStyled.jsx";
import Button from "../../components/Button/Button.jsx";
import { ErrorSpan } from "../Auth/AuthStyled.jsx";
import { useEffect, useState } from "react";
import { findProdutoByCategory, findProdutoByNameService } from "../../services/pedidoService.js";
import { json, useNavigate } from "react-router-dom";

function Pedido(){
    
    const [ produtos, setPodutos ] = useState([])
    const [ produtoCategory, setProdutoCategory ] = useState('')
    const [ error, setError ] = useState();
    const [ searchResults, setSearchResults ] = useState([]);
    const [ carrinho, setCarrinho ] = useState([]);

    useEffect(() => {
        setCarrinho(getItensCarrinho());
    }, []);

    const nami = useNavigate();

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

    async function searchHandleSubmit(data){
        try{
            const response = await findProdutoByNameService({nome: data.itemPesquisa})
            if(response.status === 400 ){
                setError(response.data.message)
            }else{
                setSearchResults(response.data.produto)
                setProdutoCategory('')
            }
        }catch(err){
            setError(`houve um erro ao buscar o produto, ${err.message}`)
        }
    }

    function addToCarrinho(produto){
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        carrinho.push(produto);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }   

    function getItensCarrinho(){
        const carrinho = localStorage.getItem('carrinho')
        if(carrinho){
            try{
                return JSON.parse(carrinho);
            }catch(err){
                console.error('Error parsing JSON from localStorage: ', err)
                return []; 
            }
        }
        return [];
    }

    function clearCarrinho(){
        localStorage.removeItem('carrinho');
    }

    function handleAddToCart(produto){
        addToCarrinho(produto);
        setCarrinho(getItensCarrinho());
    }

    function calcularValorCarrinhp(){
        const carrinho = getItensCarrinho();
        return carrinho.reduce((total, item) => total + item.valorProduto, 0)
    }

    function handleClearCart() {
        clearCarrinho();
        setCarrinho([]); 
    }

    function handleAddMesa(){
        let carrinho = getItensCarrinho()
        let mesa = localStorage.getItem('mesa')
        if(mesa){
            try{
                mesa = JSON.parse(mesa);
            }catch(err){
                console.error('Error parsing JSON from localStorage: ', err)
                mesa = [];
            }
        } else {
            mesa = [];
        }
        mesa = [...mesa, ...carrinho];
        localStorage.setItem('mesa', JSON.stringify(mesa));
        handleClearCart();
        nami('/Home/Cliente')
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
                    {error && <ErrorSpan> {error} </ErrorSpan>}
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
                                    <p key={produ._id} onClick={() => handleAddToCart(produ)}> {`${produ.nomeProduto}... R$${produ.valorProduto}`} </p>
                                ))
                            ) : (
                                <p>carregando...</p>
                            )}
                        </div>
                    )}

                    {searchResults.length > 0 && (
                        <div>
                            <h2>Resultados da Pesquisa</h2>
                            {searchResults.map(produto => (
                                <p key={produto._id} onClick={() => handleAddToCart(produto)}> {`${produto.nomeProduto}... R$${produto.valorProduto}`} </p>
                            ))}
                        </div>
                    )}
                    
                    <div className="carrinho">
                        <h2>Carrinho de compras:</h2>
                        {carrinho.length > 0 ? (
                            carrinho.map((item, index) => (
                                <p key={index}> {`${item.nomeProduto}... R$${item.valorProduto}`} </p>  
                            ))
                         ) : (
                            <p>Carrinho vazio..</p>
                        )}
                        <h3>Total: R${calcularValorCarrinhp()}</h3>
                        <ButtonCompo onClick={handleClearCart}>
                            LIMPAR CARRINHO
                        </ButtonCompo>

                        <ButtonCompo onClick={handleAddMesa}>Adicionar a mesa</ButtonCompo>
                    </div>
                </Produtos>                
            </Container>
        </>
    )
}

export default Pedido;