
import './App.css';
import About from './componentes/About';
import Nevbar from './componentes/Nevbar';
import TextForm from './componentes/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
  <>
  <Router>
    <Nevbar />
      <div className='container'>
            <Switch>
              <Route path="/">
                <TextForm heading = "Enter your text to analyze"/>
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
      </div>
  </Router>
      
    
  </>
  );
}

export default App;
