import servicios from './Utils/Servicios.json'
import Icon from '@mui/material/Icon';
import './Servicios.css'
import { Android, Code, Page } from './iconos/icons';


const Servicios = () => {

    const iconMapper = {
        "Code": <Code/>,
        "Page": <Page/>,
        "Android": <Android/>
    };
    
    return(
        <div className='containService' >
            <h2 className='serviTitle'>Servicios</h2>
            <p className='slogan' >Desde soporte técnico, hasta la creación e implementación de sistemas y proyectos de gran escala.</p>
            <div className='containerServicio' >
                {servicios.map((servicio, index) => (
                    <div key={index} className='servicio'>
                        {iconMapper[servicio.icono]}
                        <h2>{servicio.titulo} </h2>
                        <p>{servicio.descripcion}</p>
                        <button>Cotiza</button>
                    </div>
                )  )}
            </div>
        </div>
    )
    
}

export default Servicios