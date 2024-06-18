import styled from 'styled-components'

export const RegisterContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 70vh;
    width: 70%;
    padding-top: 5rem;

    form{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;
    }
`;

export const DivCadastro = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    height: 400px;
    background-color: #e6e6e6;
    padding: 2rem;
    
    h1{
        font-size: 2rem;
        padding-bottom: 2rem;
    }

    a{
        text-decoration: none;
        color: black;
    }
`;

export const DivRadio = styled.div`
    padding: 1rem;

    input {
        margin-right: 0.5rem;
    }

    label {
        margin-right: 1rem; 
    }
`;