import React, { useState } from 'react';
import Header from './header';
import Nav from './nav';
import Main from './main';

function AppStore(props){

    let [value,setValue]=useState("")
    
  return(
    <div >  
     <Header/>
     <Nav setValue={setValue}/>
     <Main value={value}/>
    </div> 
  )
}

export default AppStore