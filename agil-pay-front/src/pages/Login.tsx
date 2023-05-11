import { useState } from 'react';
import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { getRanHex, sleep, verifyCuit } from '../utils/shared-methods.js';
import { useForm } from "react-hook-form";

export default function Login(props) {

    const [loading, setLoading] = useState(0);

    const { register, handleSubmit, formState: { errors }, setError } = useForm();


    const users: any = [
        { name: 'Joaquin Costamagna', cuil: '20422581376', password: '42258137' }
    ]


    const onSubmit = async (data: any) => {
        setLoading(prev => prev + 1);
        try {
            await sleep(2000);
            const loggedUser = users.find((user: any) => user.cuil == data.cuil && user.password == data.password);
            if (!loggedUser) {
                setError('password', { message: 'Cuil o contraseña incorrectas' })
            } else {
                const token = getRanHex(24);
                props.handleLogin(token, loggedUser);
            }
        } catch (error) { }
        setLoading(prev => prev - 1);
    }

    return (
        <Container component="main" maxWidth="sm">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <h1 className='text-6xl mb-4'>AgilPay</h1>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Iniciar sesión
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        type="number"
                        fullWidth
                        id="cuil"
                        label="Cuil"
                        autoComplete="cuil"
                        autoFocus
                        error={!!errors.cuil}
                        helperText={errors.cuil?.message}
                        {...register('cuil', { required: "Debe ingresar su Cuil", validate: (cuil) => verifyCuit(cuil) ? true : 'Debe ingresar un cuil con formato válido' })}
                    />

                    <TextField
                        margin="normal"
                        fullWidth
                        label="Contraseña"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        {...register('password', { required: "Debe ingresar su contraseña" })}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                    <FormControlLabel
                        control={<Checkbox color="primary" {...register('remember')} />}
                        label="Recordarme"
                    />
                    {!loading ?
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className='text-white'
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Iniciar sesión
                        </Button>
                        :
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className='text-black'
                            startIcon={<CircularProgress size="1.5rem" />}
                            disabled
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Cargando
                        </Button>
                    }
                    <Grid container>
                        <Grid item xs>
                            <Link to="/">
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}
