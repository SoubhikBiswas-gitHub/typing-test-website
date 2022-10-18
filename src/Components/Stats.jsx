import React, { useEffect } from 'react'
import { auth, db } from '../firebaseConfig';
import Graph from './Graph'
import { useAuthState } from 'react-firebase-hooks/auth';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useAlert } from '../Context/AlertContext';

const Stats = ({wpm, accuracy, correctChars, incorrectChars, extraChars, missedChars, graphData, reset}) => {

    var timeSet = new Set();

    const {setAlert} = useAlert();

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
        // console.log(accuracy.isNaN(),accuracy,"sdsdsdss");
        if(!isNaN(accuracy)){
            await resultsRef.add({
                userId: uid,
                wpm: wpm,
                accuracy: accuracy,
                characters: `${correctChars}/${incorrectChars}/${extraChars}/${missedChars}`,
                timeStamp: new Date()
            });
        }
        else{
            
            setAlert({
                open:true,
                type:'error',
                message:'invalid test'
            });
            setTimeout(()=>{
                setAlert({
                    open:false,
                    type: "",
                    message: ""
                })
            },2000);

        }
        
        
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

                <div className="stats">
                    <div className="title">WPM</div>
                    <div className="subtitle">{wpm}</div>
                    <div className="title">Accuracy</div>
                    <div className="subtitle">{accuracy}</div>
                    <div className="title">Characters</div>
                    <div className="subtitle">{correctChars}/{incorrectChars}/{extraChars}/{missedChars}</div>
                </div>

                <RestartAltIcon className='reset-btn' onClick={reset}/>

        </div>
        <div className="right-stats">
            {/* //graph goes here */}
            <div className="graph">
                <Graph graphData={newGraph}/>
            </div>
            
            
        </div>

    </div>
  )
}

export default Stats