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

    console.log("items", items);
    console.log("items.comments", items.comments);

    const addNewComment = (e) => {
        e.preventDefault();
        setComment({
            text: e.target[0].value,
            id: e.target[1].value,
            date: 1,
        })

        // e.preventDefault();
        // fetch(`https://boiling-refuge-66454.herokuapp.com/images/${props.id}/comments`, {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: items.comments.push({
        //         text: e.target[0].value,
        //         id: e.target[1].value,
        //         date: 1,
        //     }),
        // })
        //     .then((response) => {
        //         console.log('response', response)
        //         // "JSON" не отправляется при статусе "204 - No Content"
        //         // Итак, вы можете написать это:
        //         if (response.status === 204) {
        //             console.log(204);
        //             return new Promise((resolve) => resolve(null))
        //         }
        //         if (!response.ok) {
        //             throw new Error(response.statusText)
        //         }
        //         return response.json()
        //     })
        //     .then((json) => {
        //         // Его значение равно "null", потому что мы сделали "resolve (null)"
        //         console.log('Тут хочу получить json, но ничего не приходит', json)
        //     })
        // .then((json) => console.log('json from New Comment', json));
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
                            items.comments && items.comments.map(item => <div className='apiComments'>
                                <span className="commentsDate">{new Date(item.date).toLocaleString()}</span>
                                <span className="commentsText">{item.text}</span>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        )
    }
}