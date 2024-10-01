import React, { useContext } from 'react';
import { LanguageContext } from './context/Language';


export default function Language() {

    const {language, setLanguage,handleSwitch, translate} = useContext(LanguageContext)

    return (
    <div>
        <button onClick={handleSwitch}>switch</button>
        {language == "en" ? <p>{translate.en}</p> : <p>{translate.ka}</p>}
        <p>{language}</p>
    </div>
  )
}
