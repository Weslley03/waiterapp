import styled from "styled-components";

export const AdmContainer = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    margin-top: 2rem;
    padding: 0.5rem;

    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;


    .titulo{
        text-align: center;
        padding: 0.5rem;
    }

    .opcoes{
        text-align: center;
        padding: 0.5rem;
        a{
            text-decoration: none;
            color: black;
        }
    }
`;