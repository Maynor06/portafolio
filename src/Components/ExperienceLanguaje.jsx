import { Css, Git, Html, Java, Javascript, MySQL, React, SpringBoot, Tailwind } from "./iconos/icons";
import './ExperienceLanguaje.css'

const ExperienceLanguaje = () => {
    
    return(
        <div className="experience-With">
            <h2 className="title-experience">Experience with</h2>
            <ul className="languajes">
                <li><Javascript/></li>
                <li><React/> </li>
                <li><Html/> </li>
                <li><Css/> </li>
                <li><Tailwind/> </li>
                <li> <Java/> </li>
                <li><SpringBoot/> </li>
                <li><MySQL/> </li>
                <li><Git/> </li>
            </ul>
        </div>
    )
}


export default ExperienceLanguaje;