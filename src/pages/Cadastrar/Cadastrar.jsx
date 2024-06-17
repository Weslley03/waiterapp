import { RegisterContainer, DivCadastro, DivRadio } from './CadastrarStyled'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignupSchema } from '../../../src/schemas/SignupSchema.js' 
import { Input } from '../../components/Input/Input'
import { ErrorSpan } from '../Auth/AuthStyled.jsx'
import Button from '../../components/Button/Button.jsx'

function Cadastrar() {

    const { register: signupRegister, handleSubmit: signupHandleSubmit, formState: {errors: signupErrors}} = useForm({
        resolver: zodResolver(SignupSchema) 
      })

      function upHandleSubmit(){
        //
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
                    <input type="radio" name="radio"/>
                    <label>Cliente</label>

                    <input type="radio" name="radio"/>
                    <label>Garçom</label>

                    <input type="radio" name="radio"/>
                    <label>ADM</label>
                </DivRadio>
                
                <a href="http://localhost:5173/"> tenh uma conta </a>
            </DivCadastro>
        </RegisterContainer>
    )
}

export default Cadastrar;