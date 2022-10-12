import { createContext, useContext, useState } from "react";


const GameModeContext =createContext();

export const GameModeContextProvider = ({children})=>{
    
    const [gameTime, setGameTime] = useState(15);

    const values = {
        gameTime,
        setGameTime
    }

    return (<GameModeContext.Provider value = {values}>{children}</GameModeContext.Provider>);

}

export const useGameMode = ()=> useContext(GameModeContext);

