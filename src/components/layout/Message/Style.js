import styled from 'styled-components'

const MessageDiv = styled.div`
    div {
        width: 100%;
        padding: 1rem;
        border: 1px solid #000;
        margin: 0 auto;
        text-align: center;
        margin-bottom: 1rem;
        border-radius: 5px;
    }
    
    .success {
        color: #155724;
        background-color: #d4edda;
        border-color: #c3e6cb;
    }

    .error {
        color: #721c24;
        background-color: #f8d7da;
        border-color: #f5c6cb;
    }
`;

export default MessageDiv;