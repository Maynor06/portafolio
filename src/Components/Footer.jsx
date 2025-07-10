import { useNavigate } from 'react-router-dom'
import './Footer.css'
import { Correo, GitHub, GitHubBlack, Instagram, Linke, Linkedn } from './iconos/icons'

const Footer = () => {

    const navigate = useNavigate(); 

    const handleContact = () => {
        navigate('/contact')
    }

    return (
        <div className='foot' >
            <div className='redes'>
                <a href="https://www.instagram.com/_maynor_06/" target='_blank' ><Instagram/></a>
                <a href="www.linkedin.com/in/maynor-semeya" target='_blank' ><Linke/></a>
            </div>
            <div className='logocenter' >
                <img src="logoMd.png" alt="logoPersonal"/>
            </div>
            <div className='contacto phone:mr-0' >
                <a onClick={handleContact} ><Correo /></a>
                <a href="https://github.com/Maynor06" target='_blank'><GitHubBlack/></a>
            </div>
        </div>
    )
}

export default Footer