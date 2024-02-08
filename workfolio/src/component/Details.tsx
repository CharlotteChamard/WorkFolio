import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import AccessibleOutlinedIcon from '@mui/icons-material/AccessibleOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import { Paper, autocompleteClasses } from '@mui/material';
import { SocialLinks } from './SocialLinks';

export const Details = () => {
    return (
        <div>
            <Paper elevation={4} style={{marginTop: 19, padding: '4%', background: '#FFF7F6' }}>
                
                    N'hésitez pas à me contacter
                
                <ul style={{listStyleType: 'none' }}>
                    <li> <DesignServicesOutlinedIcon /> <SocialLinks /> </li>
                    <li> <AccessibleOutlinedIcon /> charlotte.chamard@ensc.fr</li>
                    <li> <DvrOutlinedIcon /> 06 95 88 54 59</li>
                </ul>
            </Paper>
        </div >
    );
};
