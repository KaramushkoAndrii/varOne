import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../button/Button';
import './pageContent.scss';

const PageContent = ({title,
                     src, 
                     titleDescription, 
                     sectionHeader = '', 
                     descriptionTop = '', 
                     list = [], 
                     buttonText='buttons.pageButton', 
                     descriptionBottom,
                     children = null,
                     onToggleModal}) => {
                        
    const { t } = useTranslation();

    const sectionTitle = () => {
        return (
            <>
                <h2 className='page__title'>{t(title)}</h2>
                {src ? <video scr={src} /> : null}
                <p className={`main-subtitle ${title}`}>
                    {t(titleDescription)}
                </p>
            </>
        )
    }

    return (
        <>
            <section className='main-section'>
                {title ? sectionTitle() : null}

                <h2>
                    {t(sectionHeader)}
                </h2>
                <p>
                    {t(descriptionTop)}
                </p>
                <ul className='description__list'>
                    {list.map((item, key) => (
                        <li className='description__item' key={key}>{t(item)}</li>
                    ))}
                </ul>
                {buttonText ? <Button text={t(buttonText)} onClick={onToggleModal}/> : null}
                <p>{t(descriptionBottom)}</p> 
                    {children}
            </section>
        </>
    )
}

export default PageContent;