import { Select } from '@material-ui/core'
import { MenuItem } from '@mui/material'
import React from 'react'
import { useTheme } from '../Context/ThemeContext'
import { themeOptions } from '../styles/theme'



const Footer = () => {

    const {setTheme} = useTheme();

    const handleChange = ()=>{

    }
    const handleThemeChange = (e)=>{
        console.log("works");
        if(!e.target.value){
            return;
        }
        console.log(e.target.value);
        setTheme(e.target.value);
    }

    console.log(themeOptions)
  return (
    <div className='footer'>
        <div className="footer-links">
            Links
        </div>   
        <div className="theme-options">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={3}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
            {/* <Select 
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