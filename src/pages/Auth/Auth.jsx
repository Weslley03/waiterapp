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
import { Link } from 'react-router-dom'

function Auth(){

    const { register: signinRegister, handleSubmit: signinHandleSubmit, formState: {errors: signinErrors}} = useForm({
        resolver: zodResolver(SigninSchema) 
      })


      function inHandleSubmit(){
        //
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
                    <input type="radio" name="radio"/>
                    <label>Cliente</label>

                    <input type="radio" name="radio"/>
                    <label>Garçom</label>

                    <input type="radio" name="radio"/>
                    <label>ADM</label>
                </DivRadio>

                 <a href="http://localhost:5173/cadastrar"> quero criar uma conta </a>
                
            </DivAcesso>
        </AuthContainer>
    )
}

export default Auth;