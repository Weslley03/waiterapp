import styled from "styled-components";

export const DivPesquisa = styled.div`
    margin: 0 auto;
    align-items: center;

    input {
        margin-right: 1rem;
    }
`

export const Produtos = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    padding: 1rem;
    
    a{
        text-decoration: none;
        color: black;
        padding: 0.5rem;
    }

    div{
        text-align: center;
        margin-top: 1rem;
    }
`;

export const ButtonCompo = styled.button`
    background-color: #3A3A3A;;
    border: none;
    outline: none;
    font-size: 0.5rem;
    padding: 0.4rem 1rem;
    color: #fff;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    border-radius: 0.3rem;
    font-family: Roboto, arial;
    width: auto;
    font-weight: 500;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    margin-right: 0.5rem;

    &:hover{
        background-color: #191919;
    }
`;  
