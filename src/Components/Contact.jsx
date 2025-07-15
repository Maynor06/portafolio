import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import ContactJson from './Utils/Contact.json'
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { GitHub, Gps, Linke, Linkedn } from "./iconos/icons";


const Contact = () => {

  const form = useRef();

  const [dataform, setDataForm] = useState({
    name: '',
    email: '',
    asunto: '',
    message: ''
  })
  const [modalShow, setModalShow] = useState(false)
  const [modalShow2, setModalShow2] = useState(false)

  const navigate = useNavigate();
  const handleInputData = (e) => {
    const { name, value } = e.target
    setDataForm({ ...FormData, [name]: value });
  }
  const iconMapper = {
    "GitHub": <GitHub/>,
    "Linkedin": <Linke/>,
    "Gps": <Gps/>
  };


  const validateForm = () => {
    const formData = new FormData(form.current);
    const newErrors = {};
    
    if (!formData.get('name')) {
        newErrors.user_name = 'El nombre es obligatorio';
    }
    if (!formData.get('email')) {
        newErrors.user_email = 'El correo electrónico es obligatorio';
    }
    if (!formData.get('asunto')) {
        newErrors.asunto = 'El asunto es obligatorio';
    }
    if (!formData.get('message')) {
        newErrors.message = 'El mensaje es obligatorio';
    }

    if (Object.keys(newErrors).length > 0) {
      setModalShow2(true)
      return false;
    }

    return true;
};

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
  }


    emailjs
      .sendForm('service_mdejbbf', 'template_pgpstxr', form.current, {
        publicKey: '9VZFudTH34NhOn8UU',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setModalShow(true)
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
      <h1 className="cont" id="contacto" >Contactame :D</h1>
      <div className="contain-contact" >
        <div className="contact" >
          <div className="contact-con" >
            <h2>Llevemos tu proyecto al siguiente nivel.</h2>
            <p>¿Tienes alguna pregunta, propuesta o simplemente quieres saludar? No dudes en escribir.</p>
            <form ref={form} onSubmit={sendEmail} className="formSent" >
              <div className="personal-data" >
                <input type="text" placeholder="name" name="name" value={dataform.name} onChange={handleInputData} />
                <input type="email" placeholder="email" name="email" value={dataform.email} onChange={handleInputData} />
              </div>
              <input className="asunto" type="text" placeholder="Subject" name="asunto" value={dataform.asunto} onChange={handleInputData} />
              <textarea className="message" type="text" placeholder="Message" name="message" value={dataform.message} onChange={handleInputData} />
              <div className="containerButton" >
                <button className="sent" type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
        <div className="formas-contact" >
          {ContactJson.map( (contact, index) => {
            return (
              <div key={index} className="containerCon" id="#contacto" >
                <a href={contact.link} target="_blank">
                  <span className="iconContainer" >
                    {iconMapper[contact.icono]}
                  </span>
                  <p className="link">{contact.name}</p>
                </a>
              </div>
            )
          } ) }
        </div>
        
      <Modal show={modalShow} onHide={() => setModalShow(false)} centered data-bs-theme="dark">
        <div className="modalContent">
          <h2 className="modalTitle">¡El correo fue enviado con éxito! :3</h2>
          <div className="modalButtonGroup">
            <button onClick={() => setModalShow(false)} className="modalButton accept">
              Accept
            </button>
          </div>
        </div>
      </Modal>
      <Modal show={modalShow2} onHide={() => setModalShow2(false)} centered data-bs-theme="dark">
        <div className="modalContent">
          <h2 className="modalTitle">¡Los campos están vacíos! :´D</h2>
          <div className="modalButtonGroup">
            <button onClick={() => setModalShow2(false)} className="modalButton error">
              Accept
            </button>
          </div>
        </div>
      </Modal>
      </div>
    </>
  )
}

export default Contact;