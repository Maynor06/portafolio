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
         <div className="header  " >
            <img src="logoMd.png" alt="logo Personal"/>
            <button className='buttonMenu hidden' onClick={handleMenuShow} ><Menu/> </button>
            <ul className={menuShow
                ? 'sections ': 'sections2' } >      
                <button className='hidden close' onClick={handleMenuClose} ><Close/></button>
                <li> <a href="#about" onClick={handleMenuClose} >About me</a></li>
                <li> <a href="#projects" onClick={handleMenuClose} >Projects</a></li>                
                <li className='cursor-pointer ' ><a onClick={handleContact} >Contact me</a> </li>
            </ul>
        </div>
    )
}

export default Header;