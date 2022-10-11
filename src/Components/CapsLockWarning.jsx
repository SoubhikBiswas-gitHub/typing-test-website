import React from 'react'
import {Snackbar} from '@mui/material';
import {Slide} from '@mui/material';
import {Alert} from '@mui/material';

const CapsLockWarning = ({open}) => {
  return (
    <div>
        <Snackbar 
        open={open}
        anchorOrigin={{
            vertical: "top",
            horizontal: "center"
        }}>
            <Slide in={open}>
                <Alert severity='warning'>
                    Caps Locked
                </Alert>
            </Slide>
        </Snackbar>
    </div>
  )
}

export default CapsLockWarning