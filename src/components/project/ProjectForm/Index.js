import Input from '../../form/Input/Index'
import Select from '../../form/Select/Index'
import SubmitButton from '../../form/SubmitButton/Index'

import ProjectFormDiv from './Style'

export default function ProjectForm({btnText}) {
    return (
        <ProjectFormDiv>
            <form>
                <Input 
                    type="text"
                    text="Nome do projeto"
                    name="name"
                    placeholder="Insira o nome do projeto"
                />

                <Input 
                    type="number"
                    text="Orçamento do projeto"
                    name="budget"
                    placeholder="Insira o orçamento total"
                />

                <Select  name="category_id" text="Selecione a categoria"/>

                <SubmitButton text={btnText} />
           </form>
        </ProjectFormDiv>
    )
}