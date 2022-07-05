import ProjectForm from '../../project/ProjectForm/Index'

import NewProjectDiv from "./Style";

export default function NewProject() {
    return (
        <NewProjectDiv>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm btnText="Criar Projeto" />
        </NewProjectDiv>
    )
}