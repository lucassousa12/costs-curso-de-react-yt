import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

import FooterDiv from './Style'

export default function Footer(){
    return (
        <FooterDiv>
            <ul>
                <li>{<FaFacebook />}</li>
                <li>{<FaInstagram />}</li>
                <li>{<FaLinkedinIn />}</li>
            </ul>
            <p><span>Costs</span> &copy; 2022</p>
        </FooterDiv>
    )
}