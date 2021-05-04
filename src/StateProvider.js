import React , {createContext,useState} from 'react';
export const StateContext = createContext();

export const StateProvider = props =>{
    const [input ,setInput] = useState("");
    return(
        <StateContext.Provider value={[input , setInput]}>
            {props.children}
        </StateContext.Provider>
    );
};