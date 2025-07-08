import Footer from "./Footer";
import Header from "./Header";
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import { Arrow } from "./iconos/icons";
import { useNavigate } from "react-router-dom";
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
      <div className="contact" >
        <div className="contact-con" >
          <h2  >Contáctame</h2>
          <p>hablame acerca de tu projecto</p>
          <form ref={form} onSubmit={sendEmail} className="formSent" >
            <div className="personal-data" >
              <input type="text" placeholder="name" name="name" value={dataform.name} onChange={handleInputData} />
              <input type="email" placeholder="email" name="email" value={dataform.email} onChange={handleInputData} />
            </div>
            <input className="asunto" type="text" placeholder="Subject" name="asunto" value={dataform.asunto} onChange={handleInputData} />
            <textarea className="message" type="text" placeholder="Message" name="message" value={dataform.message} onChange={handleInputData} />
            <div className="containerButton" >
              <button className="sent" type="submit">Sent</button>
            </div>
          </form>
        </div>
      </div>
      
      <Modal show={modalShow} onHide={() => setModal(false)} centered data-bs-theme="dark"  >
        <div className="flex flex-col justify-center items-center gap-4 text-white p-10 " >
          <h2> the email is sent with success!! :3 </h2>
          <div className="flex gap-4 " >
            <button onClick={() => setModalShow(false)} className="text-white h-14 w-56 bg-[#6D8E6E] hover:bg-[#222A35]  focus:ring-green-300 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2 phone:w-min " >Accept</button>
          </div>
        </div>
      </Modal>
      <Modal show={modalShow2} onHide={() => setModal2(false)} title="ERROR" centered data-bs-theme="dark" >
        <div className="flex flex-col justify-center items-center gap-4 text-white p-10 " >
          <h2 > the fields are empty :´D </h2>
          <div className="flex gap-4 " >
            <button onClick={() => setModalShow2(false)} className="text-white h-14 w-56 bg-red-700 hover:bg-[#222A35] focus:ring-green-300 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2 phone:w-min " >Accept</button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Contact;