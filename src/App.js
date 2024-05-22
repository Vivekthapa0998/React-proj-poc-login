import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Signup';
import {Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import Details from './components/Details';
import Signup from './components/Signup';
import { AuthProvider } from './components/Auth';
import AuthUser from './components/AuthUser';

function App() {
  return (
    
      <AuthProvider>
      <Header/>
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Details' element={<AuthUser><Details/></AuthUser>}/>
      </Routes>
      </AuthProvider>
    
  );
}

export default App;
