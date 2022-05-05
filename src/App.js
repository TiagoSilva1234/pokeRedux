import React,{useEffect,useState} from 'react'
import './App.css';

import Card from './components/card'
import {Provider, useSelector,useDispatch} from "react-redux"
function App() {
  const dispatch = useDispatch()
  const poke = useSelector(state => state)
useEffect(()=>{
  const data = fetch("https://pokeapi.co/api/v2/pokemon?limit=300")

  .then(res=> res.json()).then(res =>{

  dispatch({type:"SET_DATA", payload:res.results})
  });

},[])

console.log(poke)
 
  return (
    <div className="App">
    {poke.map(res => <Card pokeData={res}/>)}
    
    </div>

  );

}

export default App;
