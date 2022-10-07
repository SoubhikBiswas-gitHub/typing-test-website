import './App.css';
import TypingBox from './Components/TypingBox';
import { GlobalStyles } from './styles/global';
var randomWords = require('random-words');

function App() {

  const words = randomWords(50);

  return (
    <div className="canvas">
      <GlobalStyles/>
      <h1 className='heading' style={{"text-align":"center"}}>Typing Website</h1> 
      <TypingBox words={words}/>
      <h1 style={{"text-align":"center"}}>Footer</h1>
    </div>
  );
}

export default App;
