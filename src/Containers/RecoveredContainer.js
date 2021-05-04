import React from 'react';
import useDatafetch from '../useDatafetch';

function RecoveredContainer (){
    const {datas} =useDatafetch();
    //console.log("sfr",datas)
    return(
        <div className="bg-primary text-center p-4 rounded">
            <h2>Recovered</h2>
            <h4>{datas.recovered}</h4>
            <hr />
            <h6>Last checked {Date().toLocaleString()}</h6>
        </div>
    );
};
export default RecoveredContainer;