import { ThemeProvider } from "styled-components";
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import SignUpForm from './Components/SignUpForm';
import TypingBox from './Components/TypingBox';
import { useTheme } from './Context/ThemeContext';
import { firebaseApp } from './firebaseConfig';
import  GlobalStyles  from './styles/global';

var randomWords = require('random-words');

function App() {

  const {theme} = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <div className="canvas">
          <GlobalStyles/>
          <h1 className='heading' style={{"textAlign":"center"}}>Typing Website</h1> 
          <TypingBox/>
          
          {/* <SignUpForm/> */}
          <Footer/>
        </div>
      </ThemeProvider>
    
  );
}

export default App;
