import styled from 'styled-components'

const ContainerDiv = styled.div`
    display: contents;

    .container { 
        max-width: 1200px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        flex-wrap: wrap;
    }

    .min-height {
        min-height: 75%;
    }
    
    .start {
        justify-content: flex-start;
    }

    .column {
        flex-direction: column;
        justify-content: flex-start;
    }
`;

export default ContainerDiv;