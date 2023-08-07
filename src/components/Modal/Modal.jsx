import {useEffect} from "react";
import {createPortal} from "react-dom";
import PropTypes from 'prop-types';
import css from "./Modal.module.css"

const modalRoot = document.querySelector("#modal-root")

export function Modal({image, onCloseModal}){
    useEffect(()=>{
        const handleKeydown =(event)=>{
            if(event.code === "Escape"){
                onCloseModal()
            }
        } 
        window.addEventListener("keydown", handleKeydown)
        return ()=>{
            window.removeEventListener("keydown", handleKeydown)
        }
    },[onCloseModal])

    return createPortal(
        (
        <div className={css.overlay} onClick={onCloseModal}>
            <div className={css.modal}>
                <img src={image.src} alt={image.alt} className={css.image}/>
            </div>
        </div>
        ),
    modalRoot,
    )
}

Modal.propTypes ={
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
      }),
    onCloseModal: PropTypes.func.isRequired,
}