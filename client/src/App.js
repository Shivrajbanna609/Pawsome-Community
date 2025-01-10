import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage.js';
import PetPage from './pages/PetPage/PetPage.js'
import Login from './pages/Login/Login.js'
import { ToastContainer } from 'react-toastify';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword.js';
import AdminPage from './pages/AdminPage/AdminPage.js';
import Whattodo from './pages/Whattodo/Whattodo.js';
function App() {
  return (
    <> 
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/petpage' element={<PetPage/>}/>
        <Route path='/forget-password' element={<ForgetPassword/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='/whattodo' element={<Whattodo/>}/>
      </Routes>
    </>
  );
}

export default App;
