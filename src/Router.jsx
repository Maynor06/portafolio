import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PageMain from './Components/PageMain';
import Contact from './Components/Contact';

const RouterComponent = () => {
    return(
        <BrowserRouter>
             <Routes>
                <Route path='/' element={<PageMain/>}/>
                <Route path='/contact' element={<Contact/> } />
             </Routes>
        </BrowserRouter>
    )
}

export default RouterComponent;