import Navbar from './Components/Navbar';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Aboutme from './Pages/Aboutme';
import Certification from './Pages/Certification';
import Experiance from './Pages/Experiance';
import Hobbies from './Pages/Hobbies';
import Skills from './Pages/Skills';
import Workshop from './Pages/Workshop';
import Contactme from './Pages/Contactme';
import Qualification from './Pages/Qualification';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="Aboutme" element={<Aboutme/>}/>
          <Route path="Certification" element={<Certification/>}/>
          <Route path="Experiance" element={<Experiance/>}/>
          <Route path="Hobbies" element={<Hobbies/>}/>
          <Route path="Qualification" element={<Qualification/>}/>
          <Route path="Skills" element={<Skills/>}/>
          <Route path="Workshop" element={<Workshop/>}/>
          <Route path="Contactme" element={<Contactme/>}/>
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
