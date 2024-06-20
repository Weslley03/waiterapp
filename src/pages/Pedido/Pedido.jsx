import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/Input/Input";
import Navbar from "../../components/Navbar/Navbar";
import { Container } from "../Home/HomeCliente/HomeClienteStyled";
import { useForm } from 'react-hook-form'
import SearchSchema from '../../schemas/SearchSchema.js'
import { DivPesquisa, Produtos } from "./PedidoStyled.jsx";
import Button from "../../components/Button/Button.jsx";
import { ErrorSpan } from "../Auth/AuthStyled.jsx";

function Pedido(){
    
    const { register: searchRegister, handleSubmit: searchSubmit, formState: {errors: searchErrors}} = useForm({
        resolver: zodResolver(SearchSchema),
        defaultValues: {
            itemPesquisa: ''
        }
    })

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
                    <a href="#">Cervejas....</a>
                    <a href="#">Demais Bebidas....</a>
                    <a href="#">Espetos....</a>
                    <a href="#">Porções....</a>

                    <div className="carrinho">
                        <h2>Carrinho:</h2>
                    </div>
                </Produtos>

                
            </Container>

            
        </>
    )
}

export default Pedido;