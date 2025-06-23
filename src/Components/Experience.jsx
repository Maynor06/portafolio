import './Experience.css'
import proyectos from './Utils/Proyectos.json'
import Carousel from 'react-bootstrap/Carousel';

export const Experience = () => {

    console.log("proyectos: ", proyectos)
    return (
        <div className='experience' >
            <h2>PROYECTOS</h2>
            <div className='projects-container' >
                {Object.values(proyectos).map((proyecto, index) => {
                    return (
                        <div className='proyect' key={index}>
                            <h2>{proyecto.titulo} </h2>
                            <p>{proyecto.descripcion}</p>
                            <div className='carrusel' >
                                <Carousel >
                                    {proyecto.vistasPrevias.map(prev => (
                                        <Carousel.Item>
                                            <img className="d-block w-100" src={prev} alt="prev" />
                                        </Carousel.Item>
                                    )) }
                                </Carousel>

                            </div>
                        </div>
                    )
                } )}
            </div>
        </div>
    )
}

export default Experience;