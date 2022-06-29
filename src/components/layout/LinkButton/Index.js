import { Link } from 'react-router-dom'

import ButtonDiv from './Style'

export default function LinkButton({to, text}) {
    return (
        <ButtonDiv>
            <Link to={to}>
                {text}
            </Link>
        </ButtonDiv>
    )
}