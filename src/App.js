import logo from './logo.svg';
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import Login from './pages/Login';
import {Route, Routes } from 'react-router-dom';
import Accessdenied from './pages/Accessdenied';
import Notfound from './pages/Notfound';
import PrivateRoute from './privateroutes/PrivateRoute';
import PrivateRouteHome from './privateroutes/PrivateRouteHome';
import Home from './pages/Home';
import Penaltysettings from './pages/Penaltysettings';
import Penaltygame from './pages/Penaltygame';
import Minessettings from './pages/Minessettings';
import Minesgame from './pages/Minesgame';
import Minesrequests from './pages/Minesrequests';
import Penaltyrequests from './pages/Penaltyrequests';
import Aviatorrequests from './pages/Aviatorrequests';
import Aviatorgame from './pages/Aviatorgame';
import Aviatorsettings from './pages/Aviatorsettings';

function App() {
  return (
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/login' element={<Login />} />
        </Route>
        <Route element={<PrivateRouteHome />}>
          <Route path='/' element={<Home/>}/>

          <Route path='/penalty/settings' element={<Penaltysettings/>}/>
          <Route path='/penalty/play' element={<Penaltygame/>}/>
          <Route path='/penalty/requests' element={<Penaltyrequests/>}/>
          
          <Route path='/mines/settings' element={<Minessettings/>}/>
          <Route path='/mines/play' element={<Minesgame/>}/>
          <Route path='/mines/requests' element={<Minesrequests/>}/>

          <Route path='/aviator/settings' element={<Aviatorsettings/>}/>
          <Route path='/aviator/play' element={<Aviatorgame/>}/>
          <Route path='/aviator/requests' element={<Aviatorrequests/>}/>



        </Route>
        <Route path='*' element={<Accessdenied/>}/>
      </Routes>
    
  );
}

export default App;
