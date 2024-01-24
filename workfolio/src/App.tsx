import { Routes, Route } from 'react-router-dom';
import { Home } from '../src/screens/Home'
import { ENSC } from './screens/ENSC';
import { Contact } from './screens/Contact';
import { NavBarre } from './component/NavBarre';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ensc" element={<ENSC />} />
      <Route path="/contact" element={<Contact />} />
      <NavBarre />
    </Routes>
  );
};

export default App;
