import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        
        //outline: 1px solid red;
    }
    

    body {
        margin: 0;
        font-family: "Be Vietnam Pro", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: radial-gradient(90.6% 78.78% at 93.96% 12.39%, rgb(234, 241, 247) 0%, rgb(238, 236, 247) 100%);
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        background: unset;
        border: none;

    }

`