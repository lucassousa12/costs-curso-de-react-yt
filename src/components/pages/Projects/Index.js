import ProjectsSection from './Style'
import Message from '../../layout/Message/Index'

import {useLocation} from 'react-router-dom'

export default function Projects() {

    const location = useLocation();
    let message = '';

    if (location.state) {
        message = location.state.message
    }

    return (
        <ProjectsSection>
            <h1>Meus Projetos</h1>
            {message &&( <Message text = {message} type = "success"/>)}
        </ProjectsSection>
    )
}