import styled from 'styled-components'

const Header = styled.header`
    nav {
        display: flex;
        padding: 1rem 2rem;
        justify-content: space-between;
        background-color: #222;
    }

    ul {
        display: flex;
        align-items: center;
        list-style: none;
        gap: 1rem;
    }

    li a {
        text-decoration: none;
        color: #FFF;

    }

    li a:hover {
        color: #FFBB33;
        border-bottom: 2px solid #FFBB33;
    }
`;

export default Header;