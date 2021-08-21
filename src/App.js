import React from 'react'
import './App.css'
import {BrowserRouter , Route} from 'react-router-dom';
import Home from './home'
import Search from './search'
import { useState } from 'react';
import * as SaveLocal from './saveLocal' 


const App = () => {

    const[currently_reading,setCurrentlyReading] = useState(window.localStorage.getItem('currently_reading') !==null ? JSON.parse(window.localStorage.getItem('currently_reading')) : []);
    const[want_to_read,setWantToRead] = useState(window.localStorage.getItem('want_to_read') !==null ? JSON.parse(window.localStorage.getItem('want_to_read')) : []);
    const[read,setRead] = useState(window.localStorage.getItem('read') !==null ? JSON.parse(window.localStorage.getItem('read')) : []);


    const move_to=(e,book,key)=>{

        SaveLocal.save(e,book,key,setCurrentlyReading,setWantToRead,setRead)

    }

    
    return (
        <div className="App">
        
        <BrowserRouter>
          
          <Route exact path='/' render={()=> <Home currently_reading={currently_reading} want_to_read={want_to_read} read={read} move_to={move_to} />} ></Route>
          <Route path='/search' render={()=> <Search move_to={move_to} />}></Route>
       
        </BrowserRouter>
    
    
        </div>
      );
    


}


export default App;
