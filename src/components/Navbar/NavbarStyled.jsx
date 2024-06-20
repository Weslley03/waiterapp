import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    padding: 2rem;
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const TextHelp = styled.h1`
    position: absolute;
    justify-content: space-between;
    right: 47%;
    
    cursor: pointer;
`; 

export const ButtonLogger = styled.button`
        position: absolute;
        top: 1;
        right: 1.1rem;
        padding: 0.5rem;
        
        border-radius: 0.3rem;
        border: none;
        
        cursor: pointer;    
        font-size: 1rem;
        text-transform: uppercase;
        font-family: Roboto, arial;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

        &:hover{
            background-color: red;
        }
`;