
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Stories from './Story/Stories';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Menubar from './menu/Menubar';
import Updates from './ourupdate/Updates';
import Contact from './Contacts/Contact';
import Reservation from './reserve/Reservation';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>}/>
      <Route path='/stor' element={<Stories/>}/>
      <Route path='/menu' element={<Menubar/>}/>
      <Route path='/updates' element={<Updates/>}/>
      <Route path='/cont' element={<Contact/>}/>
    <Route path='buto' element={<Reservation/>}/>
       </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
