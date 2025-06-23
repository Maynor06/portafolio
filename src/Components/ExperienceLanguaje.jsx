import { Css, Git, Html, Java, Javascript, MySQL, React, SpringBoot, Tailwind } from "./iconos/icons";
import './ExperienceLanguaje.css'

const ExperienceLanguaje = () => {
    
    return(
        <div className="experience-With">
            <h2 className="titleSection" >Experiencia</h2>
            <div class="line-horizontal"></div>
            <div class="line-vertical"></div>
            <div className="contain" >
                <div className="container" >
                    <div className="info" >
                        <h2 className="date" >Marzo 2025 - Actualidad</h2>
                        <p className="rolBussines" >Desarrollador Full-Stack</p>
                        <p className="nameBussines" >Guatemala Digital</p>
                    </div>
                    <div className="description" >
                        <p className="description" >
                            Desarrollar y mantener código de calidad en colaboración con el equipo de desarrollo.
                            Participar en proyectos y tareas asignadas, asegurando el cumplimiento de los plazos y estándares establecidos.
                        </p>
                    </div>
                </div>
                <div className="aptitudes" >
                    <h3>Tecnologias utilizadas:</h3>
                    <React/>
                </div>
            </div>
            <div class="line-vertical-bottom"></div>
        </div>
    )
}


export default ExperienceLanguaje;