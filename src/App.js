import { createTheme, ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import './App.css';
import Footer from './Components/Footer';
import SignUpForm from './Components/SignUpForm';
import TypingBox from './Components/TypingBox';
import { useTheme } from './Context/ThemeContext';
import { firebaseApp } from './firebaseConfig';
import { GlobalStyles } from './styles/global';

var randomWords = require('random-words');

function App() {

  const {theme} = useTheme();
  console.log(theme);
  return (
  //   <ThemeProvider theme={
  // }>
        <div className="canvas">
          <GlobalStyles/>
          <h1 className='heading' style={{"text-align":"center"}}>Typing Website</h1> 
          <TypingBox/>
          <SignUpForm/>
          <Footer/>
        </div>
    //  </ThemeProvider>
    
  );
}

export default App;
