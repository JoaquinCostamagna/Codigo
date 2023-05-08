import { AppBar, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
    return (
        <>
            <AppBar >
                <Stack direction="row" className='justify-between items-center'>
                    <Typography className='ms-3'>AgilPay</Typography>
                    <Stack direction="row-reverse" className="p-3" spacing={3}>
                        <Link to="/register"><Button variant='contained' className='bg-white'>Registrarse</Button></Link>
                        <Link to="/login"><Button variant='contained' color='secondary'>Iniciar sesión</Button></Link>
                    </Stack >
                </Stack >
            </AppBar >
        </>
    )
}
