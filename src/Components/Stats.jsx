import React, { useEffect } from 'react'
import { auth, db } from '../firebaseConfig';
import Graph from './Graph'
import { useAuthState } from 'react-firebase-hooks/auth';

const Stats = ({wpm, accuracy, correctChars, incorrectChars, extraChars, missedChars, graphData}) => {

    var timeSet = new Set();

    const newGraph = graphData.filter((i)=>{
        if(! timeSet.has(i[0])){
            timeSet.add(i[0]);
            return i;
        }
    });
    const [user] = useAuthState(auth);
    const pushStatsToDb = async()=>{
        const resultsRef = db.collection('results');
        const {uid} = auth.currentUser
        await resultsRef.add({
            userId: uid,
            wpm: wpm,
            accuracy: accuracy,
            characters: `${correctChars}/${incorrectChars}/${extraChars}/${missedChars}`,
            timeStamp: new Date()
        });
    }
    useEffect(()=>{
        if(user){
            pushStatsToDb();
        }
    },[]);

    console.log("new graph",newGraph);


  return (
    <div className='stats-box'>
        <div className="left-stats">
            <div className="title">WPM</div>
            <div className="subtitle">{wpm}</div>
            <div className="title">Accuracy</div>
            <div className="subtitle">{accuracy}</div>
            <div className="title">Characters</div>
            <div className="subtitle">{correctChars}/{incorrectChars}/{extraChars}/{missedChars}</div>
        </div>
        <div className="right-stats">
            {/* //graph goes here */}
            <Graph graphData={newGraph}/>
        </div>

    </div>
  )
}

export default Stats