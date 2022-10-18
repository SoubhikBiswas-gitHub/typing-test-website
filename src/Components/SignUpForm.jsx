import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useAlert } from '../Context/AlertContext';
import { useTheme } from '../Context/ThemeContext';
import { auth } from '../firebaseConfig';

const SignUpForm = ({handleClose}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {theme} = useTheme();
    const {setAlert} = useAlert();
    const handleSubmit = ()=>{
        if(!email || !password || !confirmPassword){
            setAlert({
                open: true,
                type: 'warning',
                message: 'fill all details'
            });
            setTimeout(()=>{
                setAlert({
                    open:false,
                    type: "",
                    message: ""
                })
            },2000);;
            return;
            return;
        }
        if(password!==confirmPassword){
            setAlert({
                open: true,
                type: 'warning',
                message: 'password mismatch'
            });
            setTimeout(()=>{
                setAlert({
                    open:false,
                    type: "",
                    message: ""
                })
            },2000);;
            return;
            return;
        }
        auth.createUserWithEmailAndPassword(email,password).then((ok)=>{
            setAlert({
                open: true,
                type: 'success',
                message: 'signed in'
            });
            setTimeout(()=>{
                setAlert({
                    open:false,
                    type: "",
                    message: ""
                })
            },2000);
            handleClose();
        }).catch((err)=>{
            setAlert({
                open: true,
                type: 'error',
                message: 'not able to sign in'
            });
            setTimeout(()=>{
                setAlert({
                    open:false,
                    type: "",
                    message: ""
                })
            },2000);
        });

        
    }

  return (
    <Box
     p={3}
     style={{
        padding:10,
        display:"flex",
        flexDirection:"column",
        gap:"20px",
     }}>
        <TextField
        variant="outlined"
        type="email"
        label="Enter email"
        InputLabelProps={{
            style: {
                color: theme.title
            } }}
        InputProps={{
            style:{
                color: theme.title,
            }
        }
        }
        onChange={(e)=> setEmail(e.target.value)}>

        </TextField>
        <TextField
        variant="outlined"
        type="password"
        label="Enter Password"
        InputLabelProps={{
            style: {
                color: theme.title
            } }}
        InputProps={{
            style:{
                color: theme.title,
            }
        }
        }
        onChange={(e)=> setPassword(e.target.value)}>

        </TextField>
        <TextField
        variant="outlined"
        type="password"
        label="Confirm Password"
        InputLabelProps={{
            style: {
                color: theme.title
            } }}
        InputProps={{
            style:{
                color: theme.title,
            }
        }
        }
        onChange={(e)=> setConfirmPassword(e.target.value)}>

        </TextField>

        <Button
        variant="contained"
        size="large"
        style={{backgroundColor:theme.title, color:theme.background}}
        onClick = {handleSubmit}>
            Sign Up

        </Button>

    </Box>
  )
}

export default SignUpForm