import SelectDiv from './Style'

export default function Select ({text, name, options, handleOnChange,  value}) {
    return (
        <SelectDiv>
            <label htmlFor={name}>
                {text}:
            </label>
            <select name={name} id={name}>
                <option>Selecione uma opção</option>
            </select>
        </SelectDiv>
    )
}