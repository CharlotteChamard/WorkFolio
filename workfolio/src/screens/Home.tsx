import logo from '../images/Logo_WorkFolio.png'

import { About } from '../component/About'
import { ENSC } from './ENSC'
import { Contact } from './Contact'
export const Home = () => {
    return (
        <main className="page accueil">
            <header>
                
            </header>
            <h1>WorkFolio</h1>
            <img src={logo} className="WorkFolio-Logo" alt="logo" />
            <About />
            <ENSC />
            <Contact />
        </main>
    )
}