import React, { useState, useEffect } from 'react';
import './ModalForm.css';

export default function ModalForm(props) {
    return (
        <form className="modalForm" onSubmit={props.addNewComment}>
            <input placeholder='Name' className="modalFormInput" />
            <input placeholder='Comment' className="modalFormInput "/>
            <button type='submit'>Оставить комментарий</button>
        </form>
    )
}