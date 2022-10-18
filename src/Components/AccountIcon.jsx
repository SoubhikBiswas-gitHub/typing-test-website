import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { AppBar, Modal, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import { Box, makeStyles } from '@material-ui/core';
import { auth } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import {useTheme} from '../Context/ThemeContext';
import GoogleButton from 'react-google-button';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useAlert } from '../Context/AlertContext';

const useStyles = makeStyles(() => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        backdropFilter: 'blur(2px)'
    },
    box: {
        width: 400,
        textAlign: 'center'
    }

}));


const AccountIcon = () => {


    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);
    const {setAlert} = useAlert();
    const navigate = useNavigate();
    
    const googleProvider  = new GoogleAuthProvider();

    const signInWithGoogle = () =>{
        signInWithPopup(auth, googleProvider).then((res)=>{
            setAlert({
                open: true,
                type: 'success',
                message: 'Logged in'
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
                message: 'not able to use google auth'
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

    const [user] = useAuthState(auth);

    const handleClose = () => {
        setOpen(false);
    }

    const handleChange = (e, v) => {
        setValue(v);
    }

    const logout = () => {
        auth.signOut().then((okk)=>{
            setAlert({
                open: true,
                type: 'success',
                message: 'logged out!'
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

    const handleAccountClick = () => {
        if (user) {
            navigate('/user');
        }
        else {
            setOpen(true)
        }
    }
    const {theme} = useTheme();
    const classes = useStyles();

    return (
        <div>
            <AccountCircleIcon onClick={handleAccountClick} style={{marginTop:'20px', marginRight:'0.5rem'}} />
            {user && <LogoutIcon onClick={logout} />}
            <Modal
                open={open}
                onClose={handleClose}
                className={classes.modal}
            >

                <div className={classes.box}>
                    <AppBar
                        position="static"
                        style={{ backgroundColor: "transparent"}}
                    >
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="fullWidth"
                            >
                            <Tab label='login' style={{
                                color: theme.title
                            }}></Tab>
                            <Tab label='signup' style={{
                                color: theme.title
                            }}></Tab>
                        </Tabs>
                    </AppBar>
                    {value === 0 && <LoginForm handleClose={handleClose}></LoginForm>}
                    {value === 1 && <SignUpForm handleClose={handleClose} />}
                            
                    <Box className={classes.box}>
                        <span>OR</span>
                        <GoogleButton
                        style={{width:'100%',marginTop:'1rem'}}
                        onClick = {signInWithGoogle}/>
                    </Box>

                </div>

            </Modal>

        </div>
    )
}

export default AccountIcon