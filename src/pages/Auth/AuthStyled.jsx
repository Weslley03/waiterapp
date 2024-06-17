import styled from 'styled-components'

export const AuthContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 50vh;
    width: 70%;

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
    width: 55%;
    height: 400px;
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