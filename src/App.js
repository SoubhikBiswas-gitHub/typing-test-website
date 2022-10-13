import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import UserPage from './Pages/UserPage';


function App() {

  
  return (
    <Routes>
        <Route path='/' exact element={<HomePage/>}/>
        <Route path='/user' element={<UserPage/>}/>
    </Routes>
  );
}

export default App;
