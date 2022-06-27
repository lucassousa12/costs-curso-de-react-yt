import { Link } from 'react-router-dom'

import Container from '../Container/Index'

import Header from './Style'

import Logo from '../../../img/costs_logo.png'

export default function Navbar(){
    return (
        <Header>
            <nav>
                <Link to="/">
                    <img src={Logo} alt="Costs" />
                </Link>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects">Meus Projetos</Link>
                    </li>
                    <li>
                        <Link to="/empresa">Empresa</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>
            </nav>
        </Header>
    )
}