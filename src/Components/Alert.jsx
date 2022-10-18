import React from 'react'
import {Snackbar} from '@mui/material';
import {Slide} from '@mui/material';
import {Alert} from '@mui/material';
import { useAlert } from '../Context/AlertContext';

const AlertSnackbar = () => {

    const {alert} = useAlert();
    
  return (
    <div>
        <Snackbar 
        open={alert.open}
        anchorOrigin={{
            vertical: "top",
            horizontal: "right"
        }}>
            <Slide in={alert.open} timeout={10}>
                <Alert variant="filled" severity={alert.type}>
                    {alert.message}
                </Alert>
            </Slide>
        </Snackbar>
    </div>
  )
}

export default AlertSnackbar;

