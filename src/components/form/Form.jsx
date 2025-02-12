
import axios from 'axios';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiPhoneCall, FiDollarSign, FiClock, FiMapPin } from "react-icons/fi";
import Spiner from '../spiner/Spiner';

import './form.scss';

const Form = () => {

    const SHEET_URL = 'https://api.sheetmonkey.io/form/hB96ZMdh6rX7pfH8H7mf3h'
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        number: ''
    });

    const formMessages = {
        done: t('form.done'),
        faild: t('form.faild'),
        invalidNumber: t('form.invalidNumber')
    }

    const [statusMessage, setStatusMessage] = useState(null); // Сообщение статуса отправки
    const [isSubmitting, setIsSubmitting] = useState(false);  // Статус отправки формы
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

        setStatusMessage(<Spiner />)
        setIsSubmitting(true); // Начало отправки
        setError(null);

        const formDataWithDate = {
            ...formData,
            date: new Date().toLocaleString()
        }
        console.log(formDataWithDate);

        axios.post(SHEET_URL, formDataWithDate)
            .then(response => {
                if (response.status === 200) {
                    // Успешная отправка
                    setStatusMessage(formMessages.done); // Сообщение благодарности

                    
                    //Добавление события лид Facebook на отправку формы 
                    if(window.fbq) {
                        window.fbq('track', 'Lead', {
                            content_name: formDataWithDate.task,
                            phone: formDataWithDate.number,
                            date: formDataWithDate.date,
                        });
                    }
                } else {
                    setStatusMessage(formMessages.faild); // Сообщение об ошибке
                }
            })
            .catch(() => {
                setStatusMessage(formMessages.faild); // Сообщение об ошибке при отказе
            })
            .finally(() => {
                setIsSubmitting(false); // Завершение отправки

                // Таймер для автоматического закрытия сообщения через 3 секунды
                setTimeout(() => {
                    setStatusMessage(null); // Закрыть сообщение
                }, 3000);

                // Таймер для очистки формы через 4 секунды
                setTimeout(() => {
                    setFormData({ number: '' }); // Очистить данные формы
                }, 4000);
            });
    }

    const advantages = [
        {
            icon: <FiDollarSign />,
            name: 'price'
        },
        {
            icon: <FiClock />,
            name: 'fast'
        },
        {
            icon: <FiMapPin />,
            name: 'consultation'
        }
    ]

    return (
        <section id='contact' className='form'>
            <div className='form__title'>
                <h3>
                    {t('form.title')}
                </h3>
                <h3>
                    {t('form.name')}
                </h3>
                <p>
                    {t('form.action')}
                </p>
            </div>
            <form onSubmit={submitHandler}>
                <input value={formData.number} type="tel" name='number' 
                       onChange={changeHandler}  
                       placeholder={t('form.placeholder')} 
                       disabled={isSubmitting} />

                <button disabled={isSubmitting}><i><FiPhoneCall /></i>{t('form.call')}</button>

                {error && <span className="error-message">{error}</span>}
            </form>

            {statusMessage && (
                <div className="form__status">
                    <span>{statusMessage}</span>
                </div>
            )}
            <ul>
                {advantages.map((item, key) => {
                    return (
                        <li className='form__item' key={key}><i>{item.icon}</i>{t(`form.${item.name}`)}</li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Form;