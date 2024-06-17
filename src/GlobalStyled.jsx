import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    font-family: Newsreader, Arial;
}

html {
    width: auto;
}

body {
    max-width: 100vw;
    height: 100vh;
    font-family: 'Newsreader', serif;
}
`;

export default GlobalStyled;