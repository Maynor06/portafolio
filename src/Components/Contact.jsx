import Footer from "./Footer";
import Header from "./Header";
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import { Arrow } from "./iconos/icons";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


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
      <Header />
      <button className="relative left-[15%] w-10 hover:bg-transparent hover:transition-transform hover:scale-110 back  " onClick={handleHome} ><Arrow /></button>
      <div className="contact" >
        <div className="contact-con" >
          <h2  >Contactame</h2>
          <p>Cuentame de que va tu projecto</p>
          <form ref={form} onSubmit={sendEmail} className="formSent" >
            <div className="personal-data" >
              <input type="text" placeholder="Nombre" name="name" value={dataform.name} onChange={handleInputData} />
              <input type="email" placeholder="Correo Electronico" name="email" value={dataform.email} onChange={handleInputData} />
            </div>
            <input className="asunto" type="text" placeholder="Asunto" name="asunto" value={dataform.asunto} onChange={handleInputData} />
            <textarea className="message" type="text" placeholder="Mensaje" name="message" value={dataform.message} onChange={handleInputData} />
            <button className="sent" type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <Footer />

      <Modal show={modalShow} onHide={() => setModal(false)} centered data-bs-theme="dark"  >
        <div className="flex flex-col justify-center items-center gap-4 text-white p-10 " >
          <h2> El correo fue enviado con exito!! :3 </h2>
          <div className="flex gap-4 " >
            <button onClick={() => setModalShow(false)} className="text-white h-14 w-56 bg-[#6D8E6E] hover:bg-[#222A35]  focus:ring-green-300 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2 phone:w-min " >Aceptar</button>
          </div>
        </div>
      </Modal>
      <Modal show={modalShow2} onHide={() => setModal2(false)} title="ERROR" centered data-bs-theme="dark" >
        <div className="flex flex-col justify-center items-center gap-4 text-white p-10 " >
          <h2 > Los campos estan vacios </h2>
          <div className="flex gap-4 " >
            <button onClick={() => setModalShow2(false)} className="text-white h-14 w-56 bg-red-700 hover:bg-[#222A35]  focus:ring-green-300 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2 phone:w-min " >Aceptar</button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Contact;