import './App.css';
import { BrowserRouter , Link, Routes, Route} from 'react-router-dom'; //cia isimesti Link

import Office1 from './Routes/Office1';
import Alabama from './Routes/Alabama';
import Edit from './Routes/Edit';

export const data = [

    {n: 'barsukas', id: 5},

    {n: 'bebras', id: 9},

    {n: 'krokodilas', id: 15},

    {n: 'vilkas', id: 775},

    {n: 'zuikis', id: 29}

];

//vaiksciojimas per skirtingus puslapius
function App() {
  return (
    <BrowserRouter>
        <div className="App">
        <h1>Domo Router</h1>
         <Link to="/back-office" className='super'>Back Office</Link>
         <Link to="/sweet-home" className='super'>Alabama</Link>
         <Link to="/bebrai" className='super'>Bebrai</Link>{/*3.*/}
         <Link to="/barsukai" className='super'>Barsukai</Link>{/*3.*/}

         <div>-----------------</div>
         {/*linku generuokli edit darysim*/}{/*4.*/}
         {
             data.map(a =><Link key={a.id} to={'/edit/' + a.id + '/' + a.n}>{a.n}</Link>)
         }


         <Routes> 
            <Route path="/" element={<div>Hello</div>}></Route> {/*pradine puslapio reiksme*/}
            <Route path="/back-office" element={<Office1></Office1>}></Route> {/*paspaudus nukreips i cia ir atvaizduos Office1 visa info*/}
            <Route path="/sweet-home" element={<Alabama></Alabama>}></Route> {/*paspaudus nukreips i cia ir atvaizduos Alabama visa info*/}
            <Route path="/bebrai" element={<h1>Bebrai</h1>}></Route> {/*3.*/}
            <Route path="/barsukai" element={<h1 className='super'>Barsukai</h1>} ></Route> {/*3.*/}

            <Route path="/edit/:id/:n" element={<Edit></Edit>}></Route>{/*4. route privalo cia tureti edita ir ...*/}

            <Route path="*" element={<div className='super'>404 not found</div>} ></Route> {/* cia pazymim jei url nurodysim koki nors kita nei auksciau isvardyti rodys 404 not found(neteisinga nuoroda pasirinkom)*/}
         </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;

//pagrindinis komponentas <BrowserRouter> i ji dedasi <Link kiek reik mums ju, po jais <Routes> ir jo viduje <Route

//vietoje <BrowserRouter>(http://localhost:3000/sweet-home) galim naudoti <HashRouter>(http://localhost:3000/#/sweet-home) taip daroma misri aplikasija ir cia prisideda # url

//3.Pridėti du linkus Bebrai ir Barsukai, kuriuos paspaudus užkrauna atitinkamo pavadininimo komponentus DONE!