import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/header/Header';
import Nav from './components/nav/nav';

const locales = {
  ua : {
    title: 'UA'
  },
  ru : {
    title: 'RU'
  }
}

function App() {
  const { t, i18n } = useTranslation();
  
  return (
    <div className="App">
      <h1>{t('main.header')}</h1>
      <Nav />
      <ul>
        {Object.keys(locales).map((locale) => {
          return (
            <li key={locale}><button style={{fontWeight: i18n.resolvedLanguage === locale ? 'bold' : 'normal'}} 
                type="submit"
                onClick={() => i18n.changeLanguage(locale)}>
              {locales[locale].title}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default function WrappedApp() {
  return(
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  )
}
