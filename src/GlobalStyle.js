import { createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Opens Sans', sans-serif;
    }

    html, body, #root {
        background-color: #EFEFEF;
        height: 100%;
    }
`;

export default GlobalStyle;