import styled from 'styled-components'

const HomeSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem;

    h1 {
        font-size: 2.5rem;
        margin-bottom: .5rem;
    }

    h1 span {
        color: #FFBB33;
        padding: 0 1rem;
        background-color: #222;
    }

    p {
        margin-bottom: 1.5rem;
        color: #7b7b7b;
    }

    img {
        width: 90%;
        margin: 2rem 0;
    }
`;

export default HomeSection;