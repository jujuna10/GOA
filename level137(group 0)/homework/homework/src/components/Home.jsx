import React, { useContext } from 'react';
import { ThemeContext } from './context/DataContext';

export default function Home() {
    const {theme,setTheme} = useContext(ThemeContext);

    return (
        <div>
            <button>{theme}</button>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>switch</button>
        </div>
    );
}