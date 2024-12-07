import Footer from "./Footer";
import Header from "./Header";
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import { Arrow } from "./iconos/icons";
import { useNavigate } from "react-router-dom";

const Contact = () => {

const form = useRef();

    const [dataform, setDataForm] = useState({
        name: '',
        email: '',
        asunto: '',
        message: ''
    }) 

    const navigate = useNavigate();
    const handleInputData = (e) => {
        const {name, value} = e.target
        setDataForm({...FormData, [name]: value });
    }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_mdejbbf', 'template_pgpstxr', form.current, {
        publicKey: '9VZFudTH34NhOn8UU',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setDataForm({
            name: '',
            email: '',
            asunto: '',
            message: ''
          })
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleHome = () => {
    navigate('/')
  }

    return (
        <>
            <Header/>
            <button className="relative left-[15%] w-10 hover:bg-transparent hover:transition-transform hover:scale-110 back  " onClick={handleHome} ><Arrow/></button>
            <div className="contact" >
                <div className="contact-con" >
                    <h2  >Contactame</h2>
                    <p>Cuentame de que va tu projecto</p>
                    <form ref={form} onSubmit={sendEmail} className="formSent" >
                        <div className="personal-data" >
                            <input type="text" placeholder="Nombre" name="name" value={dataform.name} onChange={handleInputData}  />
                            <input type="email" placeholder="Correo Electronico" name="email" value={dataform.email} onChange={handleInputData} />    
                        </div>
                        <input className="asunto" type="text" placeholder="Asunto" name="asunto" value={dataform.asunto} onChange={handleInputData} />
                        <textarea className="message" type="text" placeholder="Mensaje" name="message" value={dataform.message} onChange={handleInputData} />
                        <button className="sent" type="submit">Enviar</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Contact;