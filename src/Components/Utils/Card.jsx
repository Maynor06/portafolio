import { useState } from "react"
import { ModalUtil } from "./ModalUtil"
import './Card.css'
import { GitHub } from "../iconos/icons"
import Modal from 'react-bootstrap/Modal';

const Card = ({ title, description, img, body, repo }) => {

    const [modalShow, setModalShow] = useState(false)
    const [modalShowGit, setModalGit] = useState(false) 

    const handleModalShowGit = () => {
        setModalGit(!modalShowGit)
    }

    const handleModalShow = () => {
        setModalShow(!modalShow)
    }

    return (
        <div className="card sm:w-[40%] phone:w-[400px] phone:h-[220px] phone:m-auto phone:mt-[inherit] ">
            <div className="face front" >
                <img className="imgClass" loading="lazy" src={img} alt="imagen clase" />
                <h3 className="title_front">
                    {title}
                </h3>
            </div>


            <div className="face back">
                <h3 className="title ">{title} </h3>
                <p className="description">{description} </p>
                <div className="vermas ">
                    <button onClick={handleModalShow
                    } >ver mas...</button>

                    {repo != null ? <a href={repo} target="_blank">
                        <button className="size-8 "><GitHub /></button>
                    </a> : <button onClick={handleModalShowGit} className="size-8 "><GitHub /></button>
                    }


                </div>
            </div>
            <Modal show={modalShowGit} onHide={() => setModalGit(false)} centered data-bs-theme="dark"  >
                <div className="flex flex-col justify-center items-center gap-4 text-white p-10 " >
                    <h2> Due to client confidentiality I cannot show more.!! :´3 </h2>
                    <div className="flex gap-4 " >
                        <button onClick={() => setModalGit(false)} className="text-white h-14 w-56 bg-red-700 hover:bg-[#222A35]  focus:ring-green-300 font-medium rounded-full text-lg px-5 py-2.5 text-center me-2 mb-2 phone:w-min " >Accept</button>
                    </div>
                </div>
            </Modal>
            <ModalUtil body={body} onHide={() => setModalShow(false)} show={modalShow} title={title} document={document} />
        </div>
    )
}

export default Card;