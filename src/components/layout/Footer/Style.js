import styled from 'styled-components'

const FooterDiv = styled.footer`
    background-color: #222;
    text-align: center;
    padding: 1.5rem;
    color: #fff;

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        gap: 1rem;
        margin-bottom: .5rem;
    }

    li svg {
        font-size: 1.5rem;
    }

    ul li:hover {
        color: #FFBB33;
        cursor: pointer;
    }

    p span {
        font-weight: bold;
        color: #FFBB33;
    }

`;

export default FooterDiv;