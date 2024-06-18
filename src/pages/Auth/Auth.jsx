import { 
    AuthContainer,
    DivAcesso, 
    ErrorSpan,
    DivRadio
} from "./AuthStyled";
import { Input } from "../../components/Input/Input";
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SigninSchema } from '../../schemas/SigninSchema.js' 
import Button from '../../components/Button/Button.jsx'
import { login } from "../../services/authService.js";
import { useNavigate } from 'react-router-dom'
import Cookie from 'js-cookie'
import { useState } from "react";

function Auth(){

    const nami = useNavigate();
    const [ error, setError ] = useState('');

    const { register: signinRegister, handleSubmit: signinHandleSubmit, formState: {errors: signinErrors}} = useForm({
        resolver: zodResolver(SigninSchema) 
      })


      async function inHandleSubmit(data){
        try{
            const response = await login(data)
            console.log()
            Cookie.set('token', response.data.token, {expires: 1})
            nami('/home')  
        }catch(err){
            setError(`houve um erro no inHandleSubmit: ${err.message}`)
        }
      }

    return(
        <AuthContainer>
            <DivAcesso>
                <h1>ACESSAR</h1>
                <form onSubmit={signinHandleSubmit(inHandleSubmit)}>
                    <Input
                        type='email'
                        placeholder='e-mail'
                        name='email'
                        register={signinRegister}
                    />
                    {signinErrors.email && <ErrorSpan> {signinErrors.email.message} </ErrorSpan>} 

                    <Input
                        type='password'
                        placeholder='senha'
                        name='password'
                        register={signinRegister}
                    />
                    {signinErrors.password && <ErrorSpan> {signinErrors.password.message} </ErrorSpan>}

                    <Button type='submit' text='entrar'/>
                </form>

                <DivRadio>
                    <Input 
                        type="radio" 
                        name="userCategory"
                        value='Cliente'
                        register={signinRegister}
                    />
                    <label>Cliente</label>

                    <input  
                        type="radio" 
                        name="userCategory"
                        value='Garsom'
                        register={signinRegister}
                    />
                    <label>Garçom</label>

                    <input 
                        type="radio" 
                        name="userCategory"
                        value='ADM'    
                        register={signinRegister}
                    />
                    <label>ADM</label>

                    {signinErrors.userCategory && <ErrorSpan> {signinErrors.userCategory.message} </ErrorSpan>}
                </DivRadio>

                {error && <ErrorSpan> {error} </ErrorSpan>}

                 <a href="http://localhost:5173/cadastrar"> quero criar uma conta </a>
                
            </DivAcesso>
        </AuthContainer>
    )
}

export default Auth;