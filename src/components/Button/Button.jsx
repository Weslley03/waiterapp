import { ButtonSpace } from "./ButtonStyled";

export default function Button({ type, text }){
    return(
        <ButtonSpace type={type}> {text} </ButtonSpace>
    )
}