import { ThemeProvider } from "styled-components";
import Footer from '../Components/Footer';
import TypingBox from '../Components/TypingBox';
import  GlobalStyles  from '../styles/global';
import Header from "../Components/Header";
import { useTheme } from '../Context/ThemeContext';
import React from 'react'

const HomePage = () => {
    const {theme} = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <div className="canvas">
          <GlobalStyles/>
          <Header/>
          <TypingBox/>
          <Footer/>
        </div>
      </ThemeProvider>
  )
}

export default HomePage