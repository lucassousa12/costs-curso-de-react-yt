import styled from 'styled-components'

const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    label {
        margin-bottom: .6rem;
        font-weight: bold;
    }

    input {
        padding: .7rem;
        border-radius: 0;
        border: none;
    }

    input::placeholder {
        color: #7b7b7b;
    }
`;

export default InputDiv;