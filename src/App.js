import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AlertSnackbar from './Components/Alert';
import { auth } from './firebaseConfig';
import HomePage from './Pages/HomePage';
import UserPage from './Pages/UserPage';
import  GlobalStyles  from './styles/global';
import { ThemeProvider } from "styled-components";
import { useTheme } from './Context/ThemeContext';


function App() {
  const {theme} = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <AlertSnackbar/>
        <Routes>
            <Route path='/' exact element={<HomePage/>}/>
            <Route path='/user' element={<UserPage/>}/>
        </Routes>
    </ThemeProvider>
  );
}

export default App;
