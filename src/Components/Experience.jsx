import './Experience.css'
import {  Git, GitHub, Java, Javascript, MySQL, React, SpringBoot, Tailwind, PostgreSQL, ApiYoutube } from "./iconos/icons";
import proyectos from './Utils/Proyectos.json'
import Carousel from 'react-bootstrap/Carousel';

export const Experience = () => {

    const iconMapper = {
        "Java": <Java />,
        "React": <React />,
        "GitHub": <GitHub/>,
        "Tailwind": <Tailwind />,
        "Spring Boot": <SpringBoot />,
        "Git": <Git />,
        "JavasCript": <Javascript />,
        "MySQL": <MySQL/>,
        "PostgreSQL":<PostgreSQL/>,
        "API Youtube": <ApiYoutube/>, 
        "React Native": <React/>
    };


    return (
        <div className='experience' id='Proyectos' >
            <h2>PROYECTOS</h2>
            <div className='projects-container' >
                {Object.values(proyectos).map((proyecto, index) => {
                    return (
                        <div className={(index % 2) === 0 ? 'proyect' : 'proyect'} key={index}>
                            <div className={index % 2 === 0 ? 'containProy1' : 'containProy'} >
                                <div className='description' >
                                    <h2>{proyecto.titulo} </h2>
                                    <p>{proyecto.descripcion}</p>
                                </div>
                                <div className='carrusel' >
                                    <Carousel className={index === 0 ? 'viewPrev' : "prev"} >
                                        {proyecto.vistasPrevias.map(prev => (
                                            <Carousel.Item key={prev}>
                                                <img className={index === 0 ? 'viewPrev' : 'prev'} src={prev} alt="prev" />
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>

                                </div>
                            </div>

                            <div className='tecnologias'>
                                <div>
                                    <h2>Tecnologias Utilizadas</h2>
                                </div>
                                <div className='iconsExp' >
                                    {proyecto.tecnologias.map((item, i) => {
                                        return (                                                            
                                            <span key={i} className='iconExp' >
                                                {iconMapper[item]} {item}
                                            </span>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Experience;