import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import { CadastrarProdutoContainer, Formulario, OkrSpan } from "./CadastrarProdutoStyled";
import { useForm} from "react-hook-form";
import ProdutoSchema from "../../schemas/ProdutoSchema";
import { Input } from "../../components/Input/Input";
import { ErrorSpan } from "../Auth/AuthStyled";
import { cadastrarProdutoService } from "../../services/produtoService";
import { useEffect, useState } from "react";

function CadastrarProduto(){

    const { register: produtoRegister, handleSubmit: produtoHandleSubmit, reset, formState: {errors: produtoErrors} } = useForm({
        resolver: zodResolver(ProdutoSchema)
    })

    const [ error, setError ] = useState('')
    const [ sucess, setSucess ] = useState('')

    useEffect(()=> {
        if(sucess){ 
            reset()
        }
    }, [sucess, reset]) 

    async function produtoSubmit(data){
        try{
            const { produto, status } = await cadastrarProdutoService(data);
            if(!produto && status == false){
                setError('houve um problema no cadastro')
                setSuccess('');
            }
            setSucess('cadastro OK')
            setError('');
            document.forms.reset()
        }catch(err){
            console.log(err)
            setError('houve um problema no cadastro');
            setSucess('')
        }
    }

    return (
        <>
        <Navbar />
        <CadastrarProdutoContainer>
            <Formulario>
                <form onSubmit={produtoHandleSubmit(produtoSubmit)}>
                    <Input 
                        type='text'
                        placeholder='qual o nome do produto?'
                        name='nomeProduto'
                        defaultValue=''
                        register={produtoRegister}
                    />
                    {produtoErrors.nomeProduto && <ErrorSpan> {produtoErrors.nomeProduto.message} </ErrorSpan>}

                    <Input 
                        type='number'
                        placeholder='qual o valor desse produto?'
                        name='valorProduto'
                        defaultValue=''
                        register={produtoRegister}                      
                    />
                    {produtoErrors.valorProduto && <ErrorSpan> {produtoErrors.valorProduto.message} </ErrorSpan>}
                    
                    <Button
                        type='submit'
                        text='cadastrar'
                    />

                    {error && <ErrorSpan> {err} </ErrorSpan>}
                    {sucess && <OkrSpan> {sucess} </OkrSpan>}
                </form>
            </Formulario>
        </CadastrarProdutoContainer>
        </>
    )
}

export default CadastrarProduto;