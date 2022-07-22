import { useNavigate } from 'react-router-dom';
import ProjectForm from '../../project/ProjectForm/Index'

import NewProjectDiv from "./Style";

export default function NewProject() {

    const navigate = useNavigate();

    function createPost(project) {

        //Initialize Cost and services
        project.costs = 0;
        project.services = [];
     
        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),

        }).then(
            (response) => response.json(),
        )
        .then(
            (data) => {
                console.log(data)
                //redirect 
                navigate("/projects", {state: {message: "Projeto criado com sucesso!"}});
            }
        )
        .catch(err => console.log(err));
    }

    return (
        <NewProjectDiv>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </NewProjectDiv>
    )
}