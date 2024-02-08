import { SocialLinks } from "../component/SocialLinks";
import { NavBarre } from '../component/NavBarre';
import { Container } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Details } from "../component/Details";

export const Contact = () => {
    return (
        <main className="Contact">
            <NavBarre />
            <Container component="main" maxWidth="xl">
                <Box
                    sx={{
                        marginTop: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <Typography component="h1" variant="h4" sx={{ fontFamily: 'Roboto, sans-serif', color: '#A65D5C' }}>
                        Contact
                    </Typography>
                    <Details />
                </Box>
            </Container>
        </main>
    );
}