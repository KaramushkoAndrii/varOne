import { useState } from "react";

import './Modal.scss'

const Modal = () => {

    const [task, setTask] = useState('');
    const [number, setNumber] = useState('')

    const changedTask = (e) => {
        setTask(e.target.value)
    }

    const changedNumber = (e) => {
        setNumber(e.target.value)
    }

    return (
        <div className="modal">
            <div className="modal__header">
                <h2 className="modal__title"></h2>
                <span className="modal__close">X</span>
            </div>
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
        </div>
    )
}

export default Modal;