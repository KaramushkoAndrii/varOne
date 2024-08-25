
import { useTranslation } from 'react-i18next';
import Button from '../button/Button';
import './pageContent.scss';

const PageContent = ({title,
                     src, 
                     titleDescription, 
                     sectionHeader, 
                     descriptionTop, 
                     list, 
                     buttonText='buttons.pageButton', 
                     descriptionBottom, 
                     onToggleModal}) => {
                        
    const { t } = useTranslation();

    const sectionTitle = () => {
        return (
            <>
                <h2>{t(title)}</h2>
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
                <ul>
                    {list.map((item, key) => (
                        <li key={key}>{item}</li>
                    ))}
                </ul>
                <Button text={t(buttonText)}
                        onClick={onToggleModal}/>
                <p>
                    {t(descriptionBottom)}
                </p>
            </section>
        </>
    )
}

export default PageContent;