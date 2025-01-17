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
                <p className="slogan" ><strong>I develop</strong>  the basis that gives life to <br/> your <strong>projects</strong>.</p>
                <p>¡Hi! I'm Maynor, <strong>a developer </strong> with experience in using <strong>Java, Spring Boot, and <br/>
                Spring Security with JWT </strong> for token creation. I've participated in API development and have <br/> 
                knowledge of clean architectures. I'm passionate about best development practices and efficiency in <br/> software delivery...</p>
            </div>
            <div className="buttons-About" >
                <button className='button-contact' onClick={handleContact} >Contact me</button>
                <a href='https://drive.google.com/file/d/1l5Pb7ZfBhoRwOpDryL4NEtvkkKLBOUXm/view?usp=sharing' target='_blank' className='button-cv' >CV</a>
            </div>
        </div>
        
    )
}

export default Presentation;