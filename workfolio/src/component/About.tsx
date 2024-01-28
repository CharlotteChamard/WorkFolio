import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import AccessibleOutlinedIcon from '@mui/icons-material/AccessibleOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';

export const About = () => {
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h4" sx={{ fontFamily: 'Roboto, sans-serif', color: '#A65D5C' }}>
                    Étudiante en deuxième année
                </Typography>
                <br />
                <Typography component="h1" variant="h5" sx={{ fontFamily: 'Roboto, sans-serif', color: '#BB6B6A' }}>
                    École Nationale Supérieure de Cognitique
                </Typography>

                <br />
            </div >
            <Paper elevation={3} style={{ padding: '20px', background: '#FFF7F6' }}>
                <p>
                    À la recherche d'un stage d'une durée de 3 mois dès mi-juin 2024. <br></br>
                    Secteurs de prédilections :
                </p>
                <ul style={{ listStyleType: 'none' }}>
                    <li> <DesignServicesOutlinedIcon /> Design UX/UI</li>
                    <li> <AccessibleOutlinedIcon /> Santé : Accessibilité, Handicap</li>
                    <li> <DvrOutlinedIcon /> Informatique</li>
                </ul>
            </Paper>
        </div >
    );
};
