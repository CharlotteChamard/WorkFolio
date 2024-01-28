import logo from '../images/Logo_WorkFolio.png'
import { About } from '../component/About'
import { NavBarre } from '../component/NavBarre';

export const Home = () => {
    return (
        <main className="page accueil">
            <NavBarre />
            <img src={logo} />
            <About />
        </main>
    )
}