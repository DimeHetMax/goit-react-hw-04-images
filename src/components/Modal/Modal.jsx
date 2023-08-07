import React from "react";
import PropTypes from 'prop-types';
import { createPortal } from "react-dom";
import css from "./Modal.module.css"

const modalRoot = document.querySelector("#modal-root")

export class Modal extends React.Component{
    componentDidMount = ()=>{
        window.addEventListener("keydown", this.handleKeydown)
    }
    componentWillUnmount =() =>{
        window.removeEventListener("keydown", this.handleKeydown)
    }
    handleKeydown =(event)=>{
        if(event.code === "Escape"){
            this.props.onCloseModal()
        }
    } 
    render(){
       const {image, onCloseModal} = this.props;
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
}

Modal.propTypes ={
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
      }),
    onCloseModal: PropTypes.func.isRequired,
}