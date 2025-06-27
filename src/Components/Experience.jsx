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
                        <div className={(index % 2) === 0 ? 'proyect' :'proyect'} key={index}>
                            <div className={index === 0 ? 'containProy1': 'containProy'} >
                                <div className='description' >
                                    <h2>{proyecto.titulo} </h2>
                                    <p>{proyecto.descripcion}</p>
                                </div>
                                <div className='carrusel' >
                                    <Carousel className={index === 0 ? 'viewPrev': "prev"} >
                                        {proyecto.vistasPrevias.map(prev => (
                                            <Carousel.Item key={prev}>
                                            <img className={index === 0 ? 'viewPrev' : 'prev'} src={prev} alt="prev" />
                                            </Carousel.Item>
                                        )) }
                                    </Carousel>

                                </div>
                            </div>
                        </div>
                    )
                } )}
            </div>
        </div>
    )
}

export default Experience;