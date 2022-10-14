import { createContext, useContext, useState } from "react";
import { themeOptions } from "../styles/theme";


const ThemeContext =createContext();

export const ThemeContextProvider = ({children})=>{
    console.log(themeOptions);
    const defaultTheme = JSON.parse(localStorage.getItem('theme')) || themeOptions[3].value;
    const [theme, setTheme] = useState(defaultTheme);
    console.log(defaultTheme);
    const values = {
        theme,
        setTheme,
        defaultTheme
    }

    return (<ThemeContext.Provider value = {values}>{children}</ThemeContext.Provider>);

}

export const useTheme = ()=> useContext(ThemeContext);

