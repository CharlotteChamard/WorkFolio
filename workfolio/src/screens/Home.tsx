import logo from '../images/Logo_WorkFolio.png'
import logoMinimaliste from '../images/Logo_WorkFolio_Minimaliste.png'
import { About } from '../component/About'
import { ENSC } from './ENSC'
import { Contact } from './Contact'
export const Home = () => {
    return (
        <div className="page accueil">
            <header>
                <img src={logoMinimaliste} className="WorkFolio-Logo-Minimalise" alt="logo-minimaliste" />
            </header>
            <h1>WorkFolio</h1>
            <img src={logo} className="WorkFolio-Logo" alt="logo" />
            <About />
            <ENSC />
            <Contact />
        </div>
    )
}