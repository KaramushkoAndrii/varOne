
import axios from 'axios';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiPhoneCall, FiDollarSign, FiClock, FiMapPin } from "react-icons/fi";

import './form.scss';

const Form = () => {

    const SHEET_URL = 'https://api.sheetbest.com/sheets/9a4149fb-e8af-4e21-bf83-08f7db89106b'
    const { t } = useTranslation();

    const [formData, setFortData] = useState({
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

        const formDataWithDate = {
            ...formData,
            date: new Date().toLocaleString()
        }
        console.log(formDataWithDate);

        axios.post(SHEET_URL, formDataWithDate)
            .then(response => {
                console.log(response)
            })
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
                <input value={formData.number} type="tel" name='number' onChange={changeHandler}  placeholder={t('form.placeholder')}></input>
                <button><i><FiPhoneCall /></i>{t('form.call')}</button>
            </form>
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