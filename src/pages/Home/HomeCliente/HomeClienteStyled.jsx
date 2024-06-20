import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    margin-top: 2rem;

    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const MesaLista = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    text-align: center;
    padding: 0.5rem;

    div {
        display: flex;
        flex-direction: column;
    }

    div h2 {
        flex-direction: row;
        justify-content: space-between;
        
    }

    p {
        flex-direction: row;
        justify-content: space-between;
        margin-top: 7px;
        padding: 1rem;
    }
`;   

export const Opcoes = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    text-align: center;
    padding: 0.5rem;

    div {
        display: flex;
        flex-direction: column;
    }

    div h2{
        flex-direction: row;
        justify-content: space-between;
    }

    p {
        flex-direction: row;
        justify-content: space-between;
        margin-top: 10px;
        text-decoration: none;
        color: black;
    }

    a {
        text-decoration: none; 
    }
`;