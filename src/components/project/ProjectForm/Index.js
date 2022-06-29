import ProjectFormDiv from './Style'

export default function ProjectForm() {
    return (
        <ProjectFormDiv>
           <form>
                <div>
                    <input type="text" placeholder="Insira o nome do projeto" /> 
                </div>

                <div>
                    <input type="number" placeholder="Insira o orçamento total" /> 
                </div>

                <div>
                    <select className="Category_id">
                        <option selected disabled>
                            Selecione a categoria
                        </option>
                    </select>
                </div>

                <div>
                    <input type="submit" value="Criar Projeto" /> 
                </div>
           </form>
        </ProjectFormDiv>
    )
}