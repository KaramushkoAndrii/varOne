import { useTranslation } from 'react-i18next';
import { FiPhoneCall, FiDollarSign, FiClock, FiMapPin } from "react-icons/fi";

import './form.scss';

const Form = () => {

    const {t} = useTranslation();

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
            <form>
                <input type="phone" name='phone' placeholder={t('form.placeholder')}></input>
                <button><i><FiPhoneCall /></i>{t('form.call')}</button>
            </form>
            <ul>
                {advantages.map((item, key) => {
                    return (
                        <li key={key}><i>{item.icon}</i>{t(`form.${item.name}`)}</li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Form;