import { useState } from 'react';
import { InputSpace} from './InputStyled.jsx'

export function Input({type, placeholder, name, register, value: initialValue, disabled,}) {

    const [ value, setValue ] = useState(initialValue);
    let inputProps = {
        type, placeholder, ...register(name), onChange: (e) => setValue(e.target.value), disabled
    }

    if(value) inputProps.value = value;

    return(
        <>
            <InputSpace {...inputProps} /> 
        </>
    )
}   