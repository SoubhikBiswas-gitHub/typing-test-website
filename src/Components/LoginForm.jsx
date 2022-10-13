import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { auth } from '../firebaseConfig';

const LoginForm = ({handleClose}) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = () =>{
        if(!email || !password){
            alert("fill all the details");
            return;
        }

        auth.signInWithEmailAndPassword(email,password).then((ok)=>{
            alert("logged in");
            handleClose();
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
        backgroundColor:"white"
     }}>
        <TextField
        variant="outlined"
        type="email"
        label="Enter email"
        onChange={(e)=> setEmail(e.target.value)}>

        </TextField>
        <TextField
        variant="outlined"
        type="password"
        label="Enter Password"
        onChange={(e)=> setPassword(e.target.value)}/>

        <Button
        variant="contained"
        size="large"
        style={{backgroundColor:"red"}}
        onClick = {handleSubmit}>
            Login

        </Button>

    </Box>
  )
}

export default LoginForm