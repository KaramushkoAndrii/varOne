import { useState } from "react";

import './Modal.scss'

const Modal = ({onToggle, isOpen}) => {

    const [task, setTask] = useState('');
    const [number, setNumber] = useState('')

    const changedTask = (e) => {
        setTask(e.target.value)
    }

    const changedNumber = (e) => {
        setNumber(e.target.value)
    }

    return (
        <div className={`modal ${isOpen ? 'modal__open' : ''}`}>
            <header className="modal__header">
                <h2 className="modal__title">
                    Идем на встречу нашим клиентам
                </h2>
                <span className="modal__close" onClick={onToggle}>X</span>
            </header>
            <div className="modal__body">
                <form>
                    <label htmlFor="task">Stay your task hear</label>
                    <textarea name="task" id="task" value={task} onChange={changedTask} placeholder="Задача"/>

                    <label htmlFor="number">Stay your number hear</label>
                    <span>
                        <input name="number" id="number" type="tel" value={number} onChange={changedNumber} 
                            placeholder="050 123 456 78 89" />
                        <button>ClickMe!</button>
                    </span>
                </form>
            </div>
            <footer className="modal__footer">
                <div className="modal__item">
                    <span>E-mail</span>
                    <a href="mailto:karamushko1997@gmail.com">karamushko1997@gmail.com</a>
                </div>
                <div className="modal__item">
                    <span>Phone number</span>
                    <a href="tel:+380979863778">+380979863778</a>
                </div>
            </footer>
        </div>
    )
}

export default Modal;