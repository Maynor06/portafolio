import { useNavigate } from 'react-router-dom';
import './Presentation.css'
import { GitHub, Linkedn } from './iconos/icons';

const Presentation = () => {

    const navigate = useNavigate();
    const handleContact = () => {
        navigate('/contact')
    }

    return(
        <section className="About" >
            <div className="about-text" >
                <h3 className='rol' >Programador Full-Stack</h3>
                <h1 className='saludo' >Hola soy <br/><strong>Maynor David</strong></h1>
                <p className='eslogan' >Transformo ideas en experiencias digitales 
                    impactantes, perfeccionando cada detalle con práctica 
                    constante y pasión por inovar.
                </p>
                <div className='icons' >
                    <a href="https://www.linkedin.com/in/maynor-semeya/" target='_blank' className='linkedn' ><Linkedn/></a>
                    <a href="https://github.com/Maynor06" target='_blank' className='github' ><GitHub/></a>
                </div>
            </div>
            <div className='photo' >
                <img src="segunYoxd.png" alt="segun Yo" />    
            </div>
        </section>
        
    )
}

export default Presentation;