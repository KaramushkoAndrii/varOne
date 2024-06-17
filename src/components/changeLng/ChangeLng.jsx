import { useTranslation } from 'react-i18next';
import './ChangeLng.scss'


import React from 'react';

const ChangeLng = () => {
    const { i18n } = useTranslation();

    const locales = {
    ua: {
        title: 'UA'
    },
    ru: {
        title: 'RU'
    }
    };

    const handleLanguageChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
    <div className="language_toggle">
        <select onChange={handleLanguageChange} value={i18n.resolvedLanguage}>
        {Object.keys(locales).map((locale) => (
            <option key={locale} value={locale}>
            {locales[locale].title}
            </option>
        ))}
        </select>
    </div>
    );
};

export default ChangeLng;

/*const ChangeLng = () => {

    const { i18n } = useTranslation();

    const locales = {
        ua : {
            title: 'UA'
        },
        ru : {
            title: 'RU'
        }
    }


    return (
        <ul className='language_togle'>
            {Object.keys(locales).map((locale) => {
            return (
                <li key={locale}>
                    <button style={{fontWeight: i18n.resolvedLanguage === locale ? 'bold' : 'normal'}} 
                            type="submit"
                            onClick={() => i18n.changeLanguage(locale)}>
                        {locales[locale].title}
                    </button>
                </li>
            )
        })}
        </ul>
    )
}*/

//export default ChangeLng;