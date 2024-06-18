import { z } from  'zod'

export const SignupSchema = z.object({
    email: z.string().email({message: 'e-mail invalido'}),
    password: z.string().min(6, {message: 'a senha deve ter no mínimo 6 caracteres'}),
    confirmpassword: z.string().min(6, {message: 'a senha deve ter no mínimo 6 caracteres'})
    .refine((data) => data.password === data.confirmpassword, {message: 'as senhas não conferem', path: ['confirmpassword']}),
    userCategory: z.string().min(1, { message: 'escolha uma categoria de usuário' })
})