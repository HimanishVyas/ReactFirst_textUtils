
import './App.css';

import Nevbar from './componentes/Nevbar';
import TextForm from './componentes/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";
import About from './componentes/About';

function App() {
  return (
  <>
    <Nevbar />
   
    <div className='container'>
    <Router>
        <Routes>
              
              <Route path="/about" element={<About/>}> </Route>
                
             
              <Route path="/" element={<TextForm/>}></Route>
               
              
          </Routes>
      </Router>
          
    </div>
  </>
  );
}

export default App;
