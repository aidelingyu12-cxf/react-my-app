import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { FormControl } from '@mui/base/FormControl';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import { FormLabel } from '@mui/material';
import './index.css'


export default function index() {


  return (

    <div className='login-div'>
      <form className='login-form'>
        <FormControl>
          <FormLabel>Login</FormLabel>
          <div className='login-text'>
            <AccessibilityIcon>Login</AccessibilityIcon>
            <TextField id="outlined-basic" label="username" variant="outlined" size="small" />
          </div>
          <div className='login-text'>
            <AccessibilityIcon>Login</AccessibilityIcon>
            <TextField id="outlined-basic" label="password" variant="outlined" size="small" />
          </div>

        </FormControl>
        <Button variant="contained">Login</Button>
      </form>
    </div>




  )
}
