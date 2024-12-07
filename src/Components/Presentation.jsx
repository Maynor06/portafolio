import { useNavigate } from 'react-router-dom';
import './Presentation.css'

const Presentation = () => {

    const navigate = useNavigate();
    const handleContact = () => {
        navigate('/contact')
    }

    return(
        <div className="About" id='about' >
            <img src="segunYo.jpg" alt="segun Yo" />
            <div className="about-text" >
                <p className="slogan" ><strong>Desarrollo</strong> la base que da vida <br/> a tus <strong>proyectos</strong>.</p>
                <p>¡Hola! Soy Maynor un <strong>Desarrollador Backend</strong> Junior con experiencia en el uso de <strong>Java, Spring Boot<br/>
                y Spring Security con JWT </strong> para la creación de tokens. He participado en la creación de APIs y<br/>
                tengo conocimientos en arquitecturas limpias. Apasionado por las mejores prácticas de<br/>
                desarrollo y la eficiencia en la entrega de software...</p>
            </div>
            <div className="buttons-About" >
                <button className='button-contact' onClick={handleContact} >Contactame</button>
                <a href='https://drive.google.com/file/d/1LYI8kwcQoQBjdLVm18t69bVfTpH0bGYB/view?usp=sharing' target='_blank' className='button-cv' >CV</a>
            </div>
        </div>
        
    )
}

export default Presentation;