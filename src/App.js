import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/HomePage/Home';
import Chat from './Pages/ChatPage/Chat';
import AboutUs from './Pages/AboutUsPage/AboutUs';
import Pet from './Pages/PetPage/Pet';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/Signup';
import SignIn from './Pages/Login/Login';

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <SiteNavbar /> */}
      {/* <Login /> */}
      {/* <Signup />
      <Changepassword />
      <Forgetpassword /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/pet" element={<Pet />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
      {/* <Login /> */}
    </>
  );
}

export default App;
