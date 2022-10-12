import { createContext, useContext, useState } from "react";


const ThemeContext =createContext();

export const ThemeContextProvider = ({children})=>{
    
    const [theme, setTheme] = useState({
        background: "black",
        color: "white"
    });

    const values = {
        theme,
        setTheme
    }

    return (<ThemeContext.Provider value = {values}>{children}</ThemeContext.Provider>);

}

export const useTheme = ()=> useContext(ThemeContext);

