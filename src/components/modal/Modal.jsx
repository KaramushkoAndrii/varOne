
import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import MyContacts from '../myContacts/MyContacts'
import Button from "../button/Button";
import './Modal.scss'

const Modal = ({onToggle, isOpen}) => {

    const SHEET_URL = 'https://api.sheetbest.com/sheets/9a4149fb-e8af-4e21-bf83-08f7db89106b'
    const { t } = useTranslation();

    const [formData, setFortData] = useState({
        task: '',
        number: ''
    })

    const changeHandler = (e) => {
        setFortData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = e => {
        e.preventDefault();
        console.log(formData);

        axios.post(SHEET_URL, formData)
            .then(response => {
                console.log(response)
            })
    }

    return (
        <div className={`modal ${isOpen ? 'modal__open' : ''}`}>
            <header className="modal__header">
                <h2 className="modal__title">
                    {t('modal.title')}
                </h2>
                <span className="modal__close" onClick={onToggle}>X</span>
            </header>
            <div className="modal__body">
                <form onSubmit={submitHandler}>
                    <label htmlFor="task">{t('modal.task')}</label>
                    <textarea name="task" id="task" value={formData.task} onChange={changeHandler} placeholder={t('modal.text')}/>

                    <label htmlFor="number">{t('modal.number')}</label>
                    <span>
                        <input name="number" id="number" type="tel" value={formData.number} onChange={changeHandler} 
                            placeholder="050 123 456 78 89" />
                        <Button text={t('modal.send')} />
                    </span>
                </form>
            </div>
            <footer className="modal__footer">
                <div className="modal__item">
                    <span>E-mail</span>
                    <a href={`mailto:${MyContacts[0]}`}>
                        {MyContacts[0]}
                    </a>
                </div>
                <div className="modal__item">
                    <span>{t('modal.myNumber')}</span>
                    <a href={`tel:${MyContacts[1]}`}> 
                        {MyContacts[1]}
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Modal;