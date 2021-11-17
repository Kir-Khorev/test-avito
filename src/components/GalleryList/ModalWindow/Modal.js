import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function ModalInfo(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState({});

    console.log(props);
    // <div>This is modalinfo {props.id}</div>)
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

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        console.log("items", items);

        return (
            <div key={items.id}>
                <img src={items.url} />
                <div className="comments">
                    Комментарии
                    {
                        items.comments && items.comments.map(item => <div>
                            <span>Дата: {item.date}</span>
                            <span>Комментарий: {item.text}</span>
                        </div>)
                    }
                </div>
                <form>
                    <input placeholder='Name'/>
                    <input placeholder='Comment'/>
                    <button>Оставить комментарий</button>
                </form>
            </div>
        )
    }

}