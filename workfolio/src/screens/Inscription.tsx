import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavBarre } from '../component/NavBarre';
import { Link as RouterLink } from 'react-router-dom';
import axios from "axios";
import Alert from '@mui/material/Alert';


function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" component={RouterLink} to="/">
                WorkFolio
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Inscription() {
    const [hasError, setHasError] = React.useState(false);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const userCredentials = {
            email: data.get('email'),
            password: data.get('password'),
        };

        // Sending a POST request to the backend
        axios.post('http://localhost:8081/adduser', userCredentials)
            .then(response => {
                // Handle response here (e.g., storing auth token, redirecting)
                console.log('Register successful', response.data);
            })
            .catch(error => {
                // Handle errors here (e.g., user not found, wrong password)
                console.error('Register failed', error);
                setHasError(true); // Set hasError state to true to show the alert
            });
    };




    return (
        <main>
            <NavBarre />
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: '#EDD4D4' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h4" sx={{ fontFamily: 'Roboto, sans-serif', color: '#A65D5C' }}>
                            Inscription
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Addresse email "
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Mot de passe"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" style={{ color: '#CC7D7C' }} />}
                                label="Enregistrer les informations d'inscripiton"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                className="custom-button"
                                sx={{
                                    backgroundColor: '#CC7D7C',
                                    color: '#fff',
                                    mt: 3,
                                    mb: 2,
                                    '&:hover': {
                                        backgroundColor: '#CC7D7C',
                                    },
                                    '&:active': {
                                        backgroundColor: '#CC7D7C !important',
                                    }
                                }}>
                                Envoyer
                            </Button>
                            {hasError && <Alert severity="error">Identifiants incorrects. Veuillez réessayer.</Alert>}
                            <Grid container>
                                <Grid item>
                                    <Link href="#" variant="body2" color='#000'>
                                        {"Déjà un compte? Connectez-vous"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </ThemeProvider>
        </main >
    );
}