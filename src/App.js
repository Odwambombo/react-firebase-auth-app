import './App.css';
import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserRoute from './components/UserRoute';
import {useDispatch} from 'react-redux';
import {auth} from './firebase';
import {setUser} from './redux/actions';
import LoadingToRedirect from './components/LoadingToRedirect';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch(setUser(authUser))
      }else{
        dispatch(setUser(null))
      }
    })
  },[dispatch])
  return (
    <Router>

    <div className="App">
      <Routes>
        <Route element={<UserRoute />}>
          <Route path='/' element={<LoadingToRedirect/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/home'  element={<Home/>} />
        </Route>
        <Route path='/register' element={<Register/>} />
      </Routes>
    </div>

    </Router>
  );
}

export default App;
