import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function Graph({individual,capacity}) {

  let value = (capacity/Math.floor(6.5*individual))*100;
    return (
        <div className='graph'>
        <h1>Total Capacity</h1>
        <div className="graph" style={{ width: 200, height: 200 }}>
          <CircularProgressbar 
            value={value} 
            text={`${value}%`} 
            styles={buildStyles({
              // Colors
              pathColor: `rgba(60, 34, 116, ${value})`,
              trailColor: '#d6d6d6',
              textColor: 'rgb(235, 60, 150)',
              textSize: '1.8rem',
            })}
          />
        </div>
        
      </div>
    );
}

export default Graph;