import './App.css';
import { Contact } from './screens/Contact';
import { ENSC } from './screens/ENSC';
import { Home } from "./screens/Home";
import logoMinimaliste from '../src/images/Logo_WorkFolio_Minimaliste.png';
import { Routes, Route, NavLink } from 'react-router-dom';
function App() {
  return (
    <div>
      <header>
        <img src={logoMinimaliste} className="WorkFolio-Logo-Minimalise" alt="logo-minimaliste" />
        <nav>
          <NavLink to='/'>Accueil</NavLink><br></br>
          <NavLink to='/ensc'>ENSC</NavLink><br></br>
          <NavLink to='/Contact'>Contact</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ensc' element={<ENSC />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <footer>

      </footer>
    </div>
  );
}

export default App;
