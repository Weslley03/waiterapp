import { useState, useEffect } from 'react';
import { InputSpace} from './InputStyled.jsx'

export function Input({type, placeholder, name, register, defaultValue, disabled,}) {

    const [ value, setValue ] = useState(defaultValue);

    useEffect(() => {
        setValue(defaultValue)
    }, [defaultValue])

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    
    return(
        <InputSpace
            type={type}
            placeholder={placeholder}
            name={name}
            {...register(name)}
            value={value}
            onChange={handleChange}
            disabled={disabled}
        />
    )
}   