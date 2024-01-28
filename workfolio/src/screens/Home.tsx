import logo from '../images/Logo_WorkFolio.png'
import { About } from '../component/About'
import { NavBarre } from '../component/NavBarre';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

export const Home = () => {
    return (
        <main className="page accueil">
            <NavBarre />
            <Container component="main" maxWidth="xl">
                <Box
                    sx={{
                        marginTop: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <img src={logo} />

                    <About />
                </Box>
            </Container>

        </main>
    )
}