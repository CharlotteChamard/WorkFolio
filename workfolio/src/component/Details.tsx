import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Paper, Typography, autocompleteClasses } from '@mui/material';
import { SocialLinks } from './SocialLinks';

export const Details = () => {
    return (
        <div >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Paper elevation={4} style={{ marginTop: '1rem', padding: '5%', background: '#FFF7F6', borderRadius: '10px', width: '100%', maxWidth: 'sm' }}>
                <Typography component="h1" variant="h5" sx={{ fontFamily: 'Roboto, sans-serif', color: '#BB6B6A' }}>N'hésitez pas à me contacter</Typography>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                            <LinkedInIcon style={{ marginRight: '0.5rem' }} />
                            <SocialLinks />
                        </li>
                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                            <EmailIcon style={{ marginRight: '0.5rem' }} />
                            <span>charlotte.chamard@ensc.fr</span>
                        </li>
                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center' }}>
                            <PhoneIcon style={{ marginRight: '0.5rem' }} />
                            <span>06 95 88 54 59</span>
                        </li>
                    </ul>
                </Paper>
            </div>
        </div>
    );
};
