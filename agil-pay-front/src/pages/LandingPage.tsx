import { AppBar, Button, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export default function LandingPage() {
    return (
        <>
            <AppBar color="primary" enableColorOnDark className='border-[var(--bg-secondary)] border-b-[2px]'>
                <Stack direction="row" className='justify-between items-center p-3 px-7 sticky'>
                    <Button className='bg-skin-background'>
                        <Typography className='text-xl font-bold font-mono tracking-widest'>AgilPay</Typography>
                    </Button>
                    <Stack direction="row-reverse" className="" spacing={3}>
                        <Link to="/register"><Button variant='contained' className='bg-white'>Registrarse</Button></Link>
                        <Link to="/login"><Button variant='contained' color='secondary'>Iniciar sesión</Button></Link>
                    </Stack >
                </Stack >
            </AppBar >
        </>
    )
}
