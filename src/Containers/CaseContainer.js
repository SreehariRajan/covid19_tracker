import React from 'react';
import useDatafetch from '../useDatafetch';

function CasesContainer (){
    const {datas} =useDatafetch();
    return(
        <div className="bg-warning text-center p-4 rounded">
            <h2>Cases</h2>
            <h4>{datas.cases}</h4>
            <hr />
            <h6>Last checked {Date().toLocaleString()}</h6>
        </div>
    );
};
export default CasesContainer;