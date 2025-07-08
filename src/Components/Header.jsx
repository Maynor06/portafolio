import { useNavigate } from 'react-router-dom';
import './Header.css'
import { Close, Menu } from './iconos/icons';
import { useState } from 'react';

const Header = () => {
    const navigate = useNavigate();
    const [menuShow, setMenuShow] = useState(false)

    const handleMunu = () => {
        setMenuShow(!menuShow)
    }

    return(
         <nav className="header" >
            <div className='name' >
                <img src="logoMd.png" alt="logoPersonal"/>
            </div>
            <div className='navRigth' >
                <ul className={menuShow ? 'sectionshiden': 'sections'} >
                    
                    <button className='close' >
                        <Close /> 
                    </button>
                    <h3 className='lgMenu' >MD</h3>
                    <li className='sect'>Inicio</li>
                    <li className='sect'>Proyectos</li>
                    <li className='sect'>Resumen</li>
                    <li className='sect'>Contacto</li>
                </ul>
                <div className='languaje' >
                    <input type="text" />
                </div>
                <div className="iconMenu" onClick={handleMunu} >
                    <Menu/>
                </div>
            </div>
        </nav>
    )
}

export default Header;