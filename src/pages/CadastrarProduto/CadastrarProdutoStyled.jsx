import styled from "styled-components";

export const CadastrarProdutoContainer = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    margin-top: 2rem;
    padding: 0.5rem;

    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Formulario = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;

export const OkrSpan = styled.span`
    background-color: #74FF73;
    color: black;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    font-size: 0.8;
    border-radius: 7px;
`