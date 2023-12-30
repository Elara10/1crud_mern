import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Codeforinterview from './components/Codeforinterview';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
   
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Codeforinterview/>}/>
      <Route path='/all' element={<AllUsers/>}/>
      <Route path ='/add' element={<AddUser/>}/>
     </Routes>
     </BrowserRouter>
   
  );
}

export default App;
