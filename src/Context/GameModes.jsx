import { createContext, useContext, useState } from "react";


const GameModeContext =createContext();

export const GameModeContextProvider = ({children})=>{
    
    const [gameMode, setGameMode] = useState('time');  // 'time' , 'word'
    const [gameTime, setGameTime] = useState(15);
    const [gameWords, setGameWords] = useState(10);

    const values = {
        gameTime,
        gameMode,
        gameWords,
        setGameTime,
        setGameMode,
        setGameWords
    }

    return (<GameModeContext.Provider value = {values}>{children}</GameModeContext.Provider>);

}

export const useGameMode = ()=> useContext(GameModeContext);

