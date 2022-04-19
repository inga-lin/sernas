import './App.css';
import {BrowserRouter , Link} from 'react-router-dom'; //cia isimesti Link

//vaiksciojimas per skirtingus puslapius
function App() {
  return (
      <BrowserRouter>
        <div className="App">
        <h1>Domo Router</h1>
         <Link to="/back-office" className='super'>Back Office</Link>
         <Link to="/sweet-home" className='super'>Alabama</Link>
        </div>
    </BrowserRouter>
  );
}

export default App;

//pagrindinis komponentas brauser router