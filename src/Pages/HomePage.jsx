import Footer from '../Components/Footer';
import TypingBox from '../Components/TypingBox';
import  GlobalStyles  from '../styles/global';
import Header from "../Components/Header";
import React from 'react'

const HomePage = () => {

  return (
    
      <div className="canvas">
          <Header/>
          <TypingBox/>
          <Footer/>
        </div>
  )
}

export default HomePage