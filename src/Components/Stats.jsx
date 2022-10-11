import React from 'react'
import Graph from './Graph'

const Stats = ({wpm, accuracy, correctChars, incorrectChars, extraChars, missedChars, graphData}) => {

    var timeSet = new Set();

    const newGraph = graphData.filter((i)=>{
        if(! timeSet.has(i[0])){
            timeSet.add(i[0]);
            return i;
        }
    });

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