import { useNavigate } from 'react-router-dom';
import './Header.css'
import { Close, Menu } from './iconos/icons';
import { useState } from 'react';

const Header = () => {
    const navigate = useNavigate();
    const [menuShow, setMenuShow] = useState(false)

    const handleContact = (e) => {
        navigate('./contact')
    }
    const handleMenuShow = () => {
        setMenuShow(true)
        console.log(menuShow);
        
    }
    const handleMenuClose = () => {
        setMenuShow(false)
        console.log(menuShow);
        
    }

    return(
         <nav className="header" >
            <div className='name' >
                <h2>Maynor David</h2>
            </div>
            <div className='navRigth' >
               <ul className='sections' >
                    <li className='sect'>Inicio</li>
                    <li className='sect'>Proyectos</li>
                    <li className='sect'>Resumen</li>
                    <li className='sect'>Contacto</li>
                </ul>
                <div className='languaje' >
                    <input type="text" />

                </div>
            </div>
        </nav>
    )
}

export default Header;