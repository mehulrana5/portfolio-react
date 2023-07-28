import React from 'react'
import { createContext ,useState} from 'react';
const portfolioContext = createContext();

export const MyContextProvider=({ children })=>{
  const[navBtn,setNavBtn]=useState(0);

  return (
    <portfolioContext.Provider value={{navBtn,setNavBtn}}>
      {children}
    </portfolioContext.Provider>
  )
}

export default portfolioContext;
