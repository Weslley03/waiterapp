import { z } from 'zod'

const SearchSchema = z.object({
    itemPesquisa: z.string().trim().min(2, {message: 'a pequisa deve contar ao menos DUAS letras'})
})

export default SearchSchema;