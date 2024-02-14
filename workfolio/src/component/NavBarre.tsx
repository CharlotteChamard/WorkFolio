import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import logoMinimaliste from '../images/Logo_WorkFolio_Minimaliste.png';
import { Link as RouterLink } from 'react-router-dom';

export const NavBarre = () => {
    return (
        <header>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ backgroundColor: '#DDD4D4', borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >

                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Link
                            component={RouterLink}
                            to="/"
                            color="text.primary"
                            sx={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                src={logoMinimaliste}
                                alt="Logo WorkFolio Minimaliste"
                                style={{ height: '100px', marginRight: '30px', cursor: 'pointer' }}
                            />
                        </Link>
                    </div>
                    <nav>
                        <Link
                            component={RouterLink}
                            to="/"
                            variant="button"
                            color="text.primary"
                            sx={{ my: 1, mx: 1.5, textDecoration: 'none' }}
                        >
                            Acceuil
                        </Link>
                        <Link
                            component={RouterLink}
                            to="/ensc"
                            variant="button"
                            color="text.primary"
                            sx={{ my: 1, mx: 1.5, textDecoration: 'none' }}
                        >
                            ENSC
                        </Link>
                        <Link
                            component={RouterLink}
                            to="/contact"
                            variant="button"
                            color="text.primary"
                            sx={{ my: 1, mx: 1.5, textDecoration: 'none' }}
                        >
                            Contact
                        </Link>
                    </nav>

                    <Button component={RouterLink} to="/connexion" variant="outlined" sx={{ my: 1, mx: 1.5, borderColor: '#412815', color: '#412815' }}>
                        Connexion
                    </Button>
                </Toolbar>
            </AppBar>
        </header>
    );
}