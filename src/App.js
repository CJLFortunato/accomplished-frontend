import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Dashboard } from './Pages/Dashboard';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { Header } from './Components/Header';
import { Welcome } from './Pages/Welcome';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Welcome />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
