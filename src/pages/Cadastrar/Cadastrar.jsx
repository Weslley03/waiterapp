import { RegisterContainer, DivCadastro, DivRadio } from './CadastrarStyled'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignupSchema } from '../../../src/schemas/SignupSchema.js' 
import { Input } from '../../components/Input/Input'
import { ErrorSpan } from '../Auth/AuthStyled.jsx'
import Button from '../../components/Button/Button.jsx'
import { cadastrar } from '../../services/userService.js' 
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

function Cadastrar() {

    const nami = useNavigate();

    const { register: signupRegister, handleSubmit: signupHandleSubmit, formState: {errors: signupErrors}} = useForm({
        resolver: zodResolver(SignupSchema) 
      })

      async function upHandleSubmit(data){
        try{
            const response = await cadastrar(data)  
            Cookies.set('token', response.data.token, {expires: 1})
            nami('/home')  
        }catch(err){
            console.log(`houve um erro na upHandleSubmit, ${err}`)
        }
      }

    return (
        <RegisterContainer>
            <DivCadastro>
                <h1>CADASTRAR</h1>
                <form onSubmit={signupHandleSubmit(upHandleSubmit)}>
                    <Input
                        type='email'
                        placeholder='e-mail'
                        name='email'
                        register={signupRegister}
                    />
                    {signupErrors.email && <ErrorSpan> {signupErrors.email.message} </ErrorSpan>}

                    <Input
                        type='password'
                        placeholder='senha'
                        name='password'
                        register={signupRegister}
                    />
                    {signupErrors.password && <ErrorSpan> {signupErrors.password.message} </ErrorSpan>}

                    <Input
                        type='password'
                        placeholder='confirme sua senha'
                        name='confirmpassword'
                        register={signupRegister}
                    />
                    {signupErrors.confirmpassword && <ErrorSpan> {signupErrors.confirmpassword.message} </ErrorSpan>}

                    <Button type='submit' text='cadastrar' />
                </form>

                <DivRadio>
                    <Input 
                        type="radio" 
                        name="userCategory"
                        value='Cliente'
                        register={signupRegister}
                    />
                    <label>Cliente</label>

                    <Input 
                        type="radio" 
                        name="userCategory"
                        value='Garsom'
                        register={signupRegister}
                    />
                    <label>Garçom</label>

                    <Input 
                        type="radio" 
                        name="userCategory"
                        value='ADM'
                        register={signupRegister}
                    />
                    <label>ADM</label>

                    {signupErrors.userCategory && <ErrorSpan> {signupErrors.userCategory.message} </ErrorSpan>}
                </DivRadio>

                <a href="http://localhost:5173/auth"> tenho  uma conta </a>
            </DivCadastro>
        </RegisterContainer>
    )
}

export default Cadastrar;