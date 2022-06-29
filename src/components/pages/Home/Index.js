import LinkButton from '../../layout/LinkButton/Index'

import HomeSection from './Style'

import savings from '../../../img/savings.svg'

export default function Home() {
    return (
        <HomeSection>
            <h1>
                Bem Vindo ao <span>Costs</span>
            </h1>

            <p>Comece a gerenciar seus projetos agora mesmo!</p>

           <LinkButton to="novoProjeto" text="Novo Projeto"/>

            <img src={savings} alt="Costs" />
        </HomeSection>
    )
}