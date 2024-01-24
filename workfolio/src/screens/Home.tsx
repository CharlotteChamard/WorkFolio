import logo from '../images/Logo_WorkFolio.png'
import { NavBarre } from '../component/NavBarre'
import { About } from '../component/About'

export const Home = () => {
    return (
        <main className="page accueil">
            <header>
                <NavBarre />
            </header>
            <img src={logo} />
            <About />
        </main>
    )
}