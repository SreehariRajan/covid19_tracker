import React from 'react';
import useDatafetch from '../useDatafetch';

function DeathContainer (){
    const {datas} =useDatafetch();
    return(
        <div className="bg-danger text-center p-4 rounded">
            <h2>Death</h2>
            <h4>{datas.deaths}</h4>
            <hr />
            <h6>Last checked {Date().toLocaleString()}</h6>
        </div>
    );
};
export default DeathContainer;