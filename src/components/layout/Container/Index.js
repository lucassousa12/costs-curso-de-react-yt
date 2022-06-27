import ContainerDiv from './Style'

export default function Container(props) {
    return (
        <ContainerDiv>
            <div className={`container ${props.customClass} `}>
                {props.children}
            </div>
        </ContainerDiv>
    )
}