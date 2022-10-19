import React from 'react'
import { useGameMode } from '../Context/GameModes';

const UpperMenu = ({countDown}) => {

  const {setGameTime, setGameMode, gameMode, setGameWords} = useGameMode();
  const updateTime = (e)=>{
    console.log(e.target.id);
    setGameTime(e.target.id);
  }

  const setMode = (e)=>{
    setGameMode(e.target.id);
  }

  const updateWords = (e)=>{
    setGameWords(e.target.id);
  }

  return (
    <div className='upper-menu'>
        
        {gameMode==='time'?(<div className='counter'>{countDown} s</div>):(<></>)}

        <div className="modes">
          <span className='mode'id='time' onClick={(e)=>setMode(e)} style={{fontSize: '20px', paddingRight:'10px', borderRight:'1px solid'}}>Time</span>
          <span className='mode' id='words'onClick={(e)=>setMode(e)} style={{fontSize: '20px',paddingLeft:'10px'}}>Words</span>
        </div>

        {gameMode==='time'?(
          <div className='time-mode'>
            <div className="time" id={15} onClick={(e)=>updateTime(e)}>15s</div>
            <div className="time" id={30} onClick={(e)=>updateTime(e)}>30s</div>
            <div className="time" id={60} onClick={(e)=>updateTime(e)}>60s</div>
          </div>
        ):(
          <div className='word-mode'>
            <div className="no-of-words" id={10} onClick={(e)=>updateWords(e)}>10</div>
            <div className="no-of-words" id={20} onClick={(e)=>updateWords(e)}>20</div>
            <div className="no-of-words" id={30} onClick={(e)=>updateWords(e)}>30</div>
          </div>
        )}
       
    </div>
  )
}

export default UpperMenu