import { Net, Next, React, SqlServer, Vb } from "./iconos/icons";
import './ExperienceLanguaje.css'

const ExperienceLanguaje = () => {
    
    return(
        <div className="experience-With">
            <h2 className="titleSection" >Experiencia</h2>
            <div className="line-horizontal"></div>
            <div className="line-vertical"></div>
            <div className="contain" >
                <div className="container" >
                    <div className="info" >
                        <h2 className="date" >Marzo 2025 - Actualidad</h2>
                        <p className="rolBussines" >Desarrollador Full-Stack</p>
                        <p className="nameBussines" >Guatemala Digital</p>
                    </div>
                    <div  >
                        <p >
                            Desarrollar y mantener código de calidad en colaboración con el equipo de desarrollo.
                            Participar en proyectos y tareas asignadas, asegurando el cumplimiento de los plazos y estándares establecidos.
                        </p>
                    </div>
                </div>
                <div className="aptitudes" >
                    <h3>Tecnologias utilizadas</h3>
                    <div className="iconsAptitudes" >
                        <span className="iconAptitudes" >
                            <React/> React
                        </span>
                        <span className="iconAptitudes" >
                            <Vb/>
                            visual basic
                        </span>
                        <span className="iconAptitudes" >
                            <Net/>
                        </span>
                    </div>
                    <div className="iconsAptitudes" >
                        <span className="iconAptitudes" >
                            <SqlServer/>
                            Sql Server
                        </span>
                        <span className="iconAptitudes" >
                            <Next/>
                            Next
                        </span>
                    </div>
                </div>
            </div>
            <div className="line-vertical-bottom"></div>
            <div className="expContact" >
                <a className="expContact" href="https://drive.google.com/file/d/1LN2Pmif1JJ7ElevKiqlYWxw5FunWBmTZ/view?usp=sharing" target="_blank" >Descarga CV :D</a>
            </div>
        </div>
    )
}


export default ExperienceLanguaje;