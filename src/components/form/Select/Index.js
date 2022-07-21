import SelectDiv from './Style'

export default function Select ({text, name, options, handleOnChange,  value}) {
    return (
        
        <SelectDiv>

            <label htmlFor={name}>
                {text}:
            </label>

            <select 
                name={name} 
                id={name} 
                onChange={handleOnChange} 
                value={value || ''}
            >

                <option>
                    Selecione uma opção
                </option>

                { options.map(
                    (option) => (
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>
                ))
                }

            </select>

        </SelectDiv>
    )
}