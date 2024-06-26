import styled from 'styled-components'

export const AuthContainer = styled.section`
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
`
export const DivAcesso = styled.div`
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
`

export const ErrorSpan = styled.span`
    background-color: #ffaeae;
    color: #9e0000;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    font-size: 0.8;
    border-radius: 7px;
`

export const DivRadio = styled.div`
    padding: 1rem;
    text-align: center;

    input {
        margin-right: 0.5rem; /* Espaço à direita dos inputs */
    }

    label {
        margin-right: 1rem; /* Espaço à direita dos labels */
    }
`