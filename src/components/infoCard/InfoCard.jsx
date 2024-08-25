
import { useTranslation } from 'react-i18next';
import './infoCard.scss';
import Button from '../../components/button/Button';
import modal from '../../resources/modal.webp';


const InfoCard = ({img=modal, 
                   name='info-card.name', 
                   mail='karamushko1997@gmal.com', 
                   number=+380979863778, 
                   about='info-card.about',
                   onToggleModal}) => {

    const { t } = useTranslation();
    return (
        <div className='info-card'>
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
                    onClick={onToggleModal}/>
        </div>
    )
}

export default InfoCard;