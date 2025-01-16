
import axios from "axios";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import MyContacts from '../myContacts/MyContacts'
import Button from "../button/Button";
import Spiner from "../spiner/Spiner";
import './Modal.scss'

const Modal = ({isClose , isModalOpen}) => {

    const SHEET_URL = 'https://api.sheetmonkey.io/form/hB96ZMdh6rX7pfH8H7mf3h'
    const { t } = useTranslation();

    const formMessages = {
        done: t('form.done'),
        faild: t('form.faild'),
        invalidNumber: t('form.invalidNumber')
    }

    const initialFormData = {
        task: '',
        number: ''
    };

    const [formData, setFormData] = useState(initialFormData);
    const [modalMessage, setModalMessage] = useState(t('modal.title')); // Заголовок модального окна
    const [isSubmitting, setIsSubmitting] = useState(false); // Статус отправки формы
    const [hideContent, setHideContent] = useState(false); // Контроль скрытия тела и футера
    const [closeTimeout, setCloseTimeout] = useState(null); // Состояние для таймера закрытия
    const [resetTimeout, setResetTimeout] = useState(null); // Состояние для таймера сброса
    const [error, setError] = useState(null);


    const validateNumber = (number) => {
        const phoneRegex = /^\+?[0-9\s]{10,15}$/;
        return phoneRegex.test(number);
    }


    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const resetForm = () => {
        setFormData(initialFormData);
        setHideContent(false); // Возвращаем видимость контента
        setModalMessage(t('modal.title')); // Сбрасываем заголовок
    };

    const submitHandler = e => {
        e.preventDefault();

        if(!formData.number || !validateNumber(formData.number)) {
            setError(formMessages.invalidNumber);

            setFormData({number: ''})
            setTimeout(() => {
                setError(null)
            }, 3000)

            return;
        }

        // Перед отправкой, отображаем сообщение ожидания и спиннер
        setModalMessage(<Spiner />);
        setIsSubmitting(true);
        setHideContent(true); // Скрыть содержимое

        const formDataWithDate = {
            ...formData,
            date: new Date().toLocaleString()
        }
        console.log(formDataWithDate);

        // Отправляем данные
        axios.post(SHEET_URL, formDataWithDate)
            .then(response => {
                if (response.status === 200) {
                    setModalMessage(formMessages.done); // Сообщение об успешной отправке
                

                    //Добавление события лид Facebook на отправку формы 
                    if(window.fbq) {
                        window.fbq('track', 'Lead', {
                            content_name: formDataWithDate.task,
                            phone: formDataWithDate.number,
                            date: formDataWithDate.date,
                        });
                    }
                
                } else {
                    setModalMessage(formMessages.faild); // Сообщение об ошибке
                }

                // Закрытие модального окна через 3 секунды
                const closeTimeoutId = setTimeout(() => {
                    isClose(); // Закрытие модального окна
                }, 3000);
                setCloseTimeout(closeTimeoutId);

                // Сброс формы через 4 секунды
                const resetTimeoutId = setTimeout(() => {
                    resetForm(); // Сбрасываем форму и возвращаем отображение
                }, 4000);
                setResetTimeout(resetTimeoutId);
            })
            .catch(() => {
                setModalMessage(formMessages.faild); // Сообщение об ошибке
                const resetTimeoutId = setTimeout(() => {
                    resetForm(); // Сбрасываем форму и возвращаем отображение
                }, 4000);
                setResetTimeout(resetTimeoutId);
            })
            .finally(() => {
                setIsSubmitting(false); // Скрыть спиннер после завершения
            });
    }

    // Очищаем таймеры при размонтировании компонента или изменении состояния
    useEffect(() => {
        return () => {
            if (closeTimeout) {
                clearTimeout(closeTimeout);
            }
            if (resetTimeout) {
                clearTimeout(resetTimeout);
            }
        };
    }, [closeTimeout, resetTimeout]);

    return (
        <div className={`modal ${isModalOpen ? 'modal__open' : ''}`}>
            <header className="modal__header">
                <h2 className="modal__title">
                    {isSubmitting ? <Spiner /> : modalMessage}
                </h2>
                <span className="modal__close" onClick={isClose}>X</span>
            </header>
            <div className="modal__body" style={{ display: hideContent ? 'none' : 'block' }}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="task">{t('modal.task')}</label>
                    <textarea name="task" id="task" value={formData.task} onChange={changeHandler} placeholder={t('modal.text')}/>

                    <label htmlFor="number">{t('modal.number')}</label>
                    <span>
                        <input name="number" id="number" type="tel" value={formData.number} onChange={changeHandler} 
                            placeholder="050 123 456 78 89" />
                        <Button text={t('modal.send')} />
                    </span>

                    {error && <span className="error-message">{error}</span>}
                </form>
            </div>
            <footer className="modal__footer" style={{ display: hideContent ? 'none' : 'block' }}>
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