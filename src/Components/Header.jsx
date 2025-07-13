import './Header.css'
import { Close, Menu } from './iconos/icons';
import { useState } from 'react';

const Header = () => {
    const [menuShow, setMenuShow] = useState(false);

    const toggleMenu = () => {
        setMenuShow(!menuShow);
    };

    return (
        <nav className="header">
            <div className='name'>
                <img src="logoMd.png" alt="logoPersonal" />
            </div>

            <div className={`mobileMenu ${menuShow ? 'open' : ''}`}>
                <button className='close' onClick={toggleMenu}>
                    <Close />
                </button>
                <img className='log' src="logoMd.png" alt="logoPersonal" />
                <ul className="mobileList">
                    <li className='sect' ><a href="#About" onClick={toggleMenu} >Acerca de mí</a></li>
                    <li className='sect' ><a href="#Servicios" onClick={toggleMenu} >Servicios</a></li>
                    <li className='sect' ><a href="#Proyectos" onClick={toggleMenu}>Proyectos</a></li>
                    <li className='sect' ><a href="#contacto" onClick={toggleMenu} >Contacto</a></li>
                </ul>
            </div>

            <div className='navRigth'>
                <ul className='sections'>
                    <li className='sect' ><a href="#About" onClick={toggleMenu} >Acerca de mí</a></li>
                    <li className='sect' ><a href="#Servicios" onClick={toggleMenu} >Servicios</a></li>
                    <li className='sect' ><a href="#Proyectos" onClick={toggleMenu}>Proyectos</a></li>
                    <li className='sect' ><a href="#contacto" onClick={toggleMenu} >Contacto</a></li>
                </ul>

                <div className="iconMenu" style={menuShow ? {"display": "none"} : {} } onClick={toggleMenu}>
                    <Menu />
                </div>
            </div>
        </nav>
    );
};

export default Header;
