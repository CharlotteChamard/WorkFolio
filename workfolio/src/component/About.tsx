import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import AccessibleOutlinedIcon from '@mui/icons-material/AccessibleOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
export const About = () => {
    return (
        <div>
            <h2> Charlotte CHAMARD</h2>
            <h3>Étudiante en deuxième année à l'École Nationale Supérieure de Cognitique</h3>
            <p>
                À la recherche d'un stage d'une durée de 3 mois dès mi-juin 2024.
                Secteurs de prédilections :
                <ul>
                    <li> <DesignServicesOutlinedIcon /> Design UX/UI</li>
                    <li> <AccessibleOutlinedIcon /> Santé : Accessibilité, Handicap</li>
                    <li> <DvrOutlinedIcon /> Informatique</li>
                </ul>
            </p>
        </div>
    );
}