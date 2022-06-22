import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './Pages/Dashboard';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { Header } from './Components/Header';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
