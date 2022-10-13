import { MenuItem } from '@mui/material'
import React from 'react'
import Select from 'react-select'
import { useTheme } from '../Context/ThemeContext'
import { themeOptions } from '../styles/theme'


const Footer = () => {

    const {setTheme} = useTheme();

    const handleChange = ()=>{

    }
    const handleThemeChange = (e)=>{
        console.log("works");
        // if(!e.target.value){
        //     return;
        // }
        console.log(e.value);
        // console.log(e.target.data['value']);
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
            defaultValue={themeOptions[0]}
            >

            </Select>


            {/* <Select 
            sx={{minWidth:30}}
            className='select'
            label="options"
            value=''
            onChange={handleThemeChange}
            >
                
            {themeOptions.map(i=>(
                <MenuItem value={i.value}>{i.label}</MenuItem>
            ))}
            </Select> */}

        </div> 

    </div>
  )
}

export default Footer