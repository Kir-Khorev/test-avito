import React, { useState, useEffect } from 'react';
import ModalForm from './ModalForm';
import './Modal.css';

export default function ModalInfo(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState({});

    const [comments, setComment] = useState([items.comments]);

    useEffect(() => {
        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${props.id}`)
            .then((response) => response.json())
            .then((result) => {
                setIsLoaded(true)
                setItems(result)
            },
                (error) => {
                    setIsLoaded(false)
                    setError(error)
                }
            )
    }, []);

    const addNewComment = (e) => {
        e.preventDefault();
        setComment({
            name: e.target[0].value,
            text: e.target[1].value,
            date: 1,
        })

        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${props.id}/comments`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: items.comments.push({
                name: e.target[0].value,
                text: e.target[1].value,
                date: 1,
            }),
        })
    }

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div key={items.id} className="modalWindow">
                <div className='leftColumn'>
                    <div className='modalWindowImg'><img src={items.url} /></div>
                    <ModalForm id={items.id} comments={items.comments} addNewComment={addNewComment} />
                </div>
                <div className='rightColumn'>
                    <div className="comments">
                        Комментарии:
                        {
                            items.comments && items.comments.map((item, i) => <div id={i} className='apiComments'>
                                <span className="commentsDate">{new Date(item.date).toLocaleString()}</span>
                                <span className="commentsDate">{item.name}</span>
                                <span className="commentsText">{item.text}</span>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        )
    }
}