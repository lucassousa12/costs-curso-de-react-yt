import InputDiv from './Style'

export default function Input({type, text, name, placeholder, handleOnChange,  value}) {
    return (
        <InputDiv>
            <label htmlFor={name}>
                {text}:
            </label>
            <input 
                type={type} 
                name={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
            />
        </InputDiv>
    )
}