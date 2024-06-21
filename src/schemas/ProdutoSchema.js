import { z } from 'zod'

const ProdutoSchema = z.object({
    nomeProduto: z.string().trim().min(2, {message: 'necessário ao menos 2 caracteres'}),
    valorProduto: z.string()
        .transform((value) => parseFloat(value))
        .refine((value) => !isNaN(value), {message: 'valor invalido'})
        .refine((value) => value > 0, {message: 'valor deve ser positivo'} )
});

export default ProdutoSchema;