import { MenuItem } from '@mui/material'
import React from 'react'
import Select from 'react-select'
import { useTheme } from '../Context/ThemeContext'
import { themeOptions } from '../styles/theme'
import GitHubIcon from '@mui/icons-material/GitHub';


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

        <div className="intructions">
            <div className="hint">
                press <kbd>Tab</kbd> to open commands
            </div>
        </div>

        <div className="actual-footer">
            <div className="footer-links" >
                <a href='https://github.com/utkarsh-dubey/typing-test-website' target="_blank">
                    <GitHubIcon />
                </a>
            </div>   
            <div className="theme-options">

                <Select
                    options={themeOptions}
                    menuPlacement='top'
                    onChange={handleThemeChange}
                    defaultValue={{label:defaultTheme.label,value:defaultTheme}}
                    styles={{
                        control: (styles) => ({...styles,backgroundColor:theme.background, cursor:'pointer', borderColor:theme.title}),
                        singleValue: (styles) => ({...styles, color:theme.title}),
                        menu: styles => ({...styles,backgroundColor:theme.background})
                    }}
                />
            </div> 
        </div>

        

    </div>
  )
}

export default Footer