import { MenuItem } from '@mui/material'
import React from 'react'
import Select from 'react-select'
import { useTheme } from '../Context/ThemeContext'
import { themeOptions } from '../styles/theme'


const Footer = () => {

    const {setTheme,theme,defaultTheme} = useTheme();
    
    const handleChange = ()=>{

    }
    const handleThemeChange = (e)=>{
        console.log("works");
        console.log(e.value);
        localStorage.setItem('theme',JSON.stringify(e.value));
        setTheme(e.value);
    }
    
    console.log(themeOptions)
  return (
    <div className='footer'>
        <div className="footer-links">
            Links
        </div>   
        <div className="theme-options">

            <Select
                options={themeOptions}
                menuPlacement='top'
                onChange={handleThemeChange}
                defaultValue={{label:defaultTheme.label,value:defaultTheme}}
                styles={{
                    control: (styles) => ({...styles,backgroundColor:theme.background}),
                    menu: styles => ({...styles,backgroundColor:theme.background})
                }}
            />
        </div> 

    </div>
  )
}

export default Footer