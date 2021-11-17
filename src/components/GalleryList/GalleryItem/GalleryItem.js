import React, { useState } from "react";
import { CloseButton } from 'react-bootstrap';
import Modal from 'react-modal';
import ModalInfo from "../ModalWindow/Modal";
import './Gallery.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        background: 'rgba(0, 0, 0, 0.7)',
    },
};

Modal.setAppElement('#root');

export default function GalleryItem(props) {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        console.log('after opem');
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (<div>
        <a key={props.item.id} onClick={() => openModal()}>
            <img src={props.item.url} alt={props.item.id} />
        </a>
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
        >
            <CloseButton onClick={closeModal} />
            <ModalInfo id={props.item.id} />
        </Modal>
    </div>
    )
}