
import { useTranslation } from 'react-i18next';
import './infoCard.scss';
import Button from '../../components/button/Button';
import modal from '../../resources/modal.webp';
import MyContacts from '../myContacts/MyContacts';


const InfoCard = ({img=modal, 
                   name='info-card.name', 
                   mail=MyContacts[0], 
                   number=MyContacts[1], 
                   about='info-card.about',
                   isOpen}) => {

    const { t } = useTranslation();
    return (
        <aside className='info-card'>
            <div className='info-card__img'>
                <img src={img}  alt={img}/>
            </div>
            <h3 className='info-card__title'>
                {t(name)}
            </h3>
            <div className='info-card__contacts'>
                <span>
                    <p>E-mail</p>
                    <a href={`mailto:${mail}`}>{mail}</a>
                </span>
                <span>
                    <p>{t('info-card.phone')}</p>
                    <a href={`tel:${number}`}>{number}</a>
                </span>
            </div>
            <p className='info-card__about'>
                {t(about)}
            </p>
            <Button text={t('info-card.button')}
                    onClick={isOpen}/>
        </aside>
    )
}

export default InfoCard;