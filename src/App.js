import logo from './logo.svg';
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css';
import Login from './pages/Login';
import {Route, Routes } from 'react-router-dom';
import Accessdenied from './pages/Accessdenied';
import PrivateRoute from './privateroutes/PrivateRoute';
import PrivateRouteHome from './privateroutes/PrivateRouteHome';
import Home from './pages/Home';
import Penaltysettings from './pages/Penalty/Penaltysettings';
import Penaltygame from './pages/Penalty/Penaltygame';
import Minessettings from './pages/Mines/Minessettings';
import Minesgame from './pages/Mines/Minesgame';
import Minesrequests from './pages/Mines/Minesrequests';
import Penaltyrequests from './pages/Penalty/Penaltyrequests';
import Aviatorsettings from './pages/Aviator/Aviatorsettings';
import Aviatorgame from './pages/Aviator/Aviatorgame';
import Aviatorrequests from './pages/Aviator/Aviatorrequests';
import Mrthimblesettings from './pages/Mrthimble/Mrthimblesettings';
import Mrthimblegame from './pages/Mrthimble/Mrthimblegame';
import Mrthimblerequests from './pages/Mrthimble/Mrthimblerequests';
import Highflyersettings from './pages/Highflyer/Highflyersettings';
import Highflyergame from './pages/Highflyer/Highflyergame';
import Highflyerrequests from './pages/Highflyer/Highflyerrequests';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IsLogIn } from './Redux/actions';


function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    const is_login = localStorage.getItem('is_login')
    if(is_login){
      dispatch(IsLogIn(true))
    }
    
  },[])

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

          <Route path='/mrthimble/settings' element={<Mrthimblesettings/>}/>
          <Route path='/mrthimble/play' element={<Mrthimblegame/>}/>
          <Route path='/mrthimble/requests' element={<Mrthimblerequests/>}/>

          <Route path='/highflyer/settings' element={<Highflyersettings/>}/>
          <Route path='/highflyer/play' element={<Highflyergame/>}/>
          <Route path='/highflyer/requests' element={<Highflyerrequests/>}/>


        </Route>
        <Route path='*' element={<Accessdenied/>}/>
      </Routes>
    
  );
}

export default App;
