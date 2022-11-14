
import './App.css';
import Nevbar from './componentes/Nevbar';
import TextForm from './componentes/TextForm';

function App() {
  return (
  <>
    <Nevbar />
    <div className='container'>
          <TextForm heading = "Enter your text to analyze"/>
    </div>
  </>
  );
}

export default App;
