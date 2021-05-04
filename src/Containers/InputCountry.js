import React, { useContext, useState } from 'react';
import { StateContext } from '../StateProvider';

function InputCountry(){
    const [input ,setInput] = useContext(StateContext);
    return(
        <form onSubmit={e=> e.preventDefault()} className="mr-5 ml-5 p-2">
            <div className="w-100 text-center">
                <input type="text" onChange={e => setInput(e.target.value)} placeholder=" Search country" className="w-50"/>
            </div>
        </form>
    );

} 
export default InputCountry;