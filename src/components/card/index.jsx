import React,{useState,useEffect} from "react";
import './index.scss'


const Card = ({pokeData,min,max})=>{
const  [pokeObj,setPokeObj] = useState({});
    useEffect(()=>{
      
 /*        const data = fetch(`${pokeData.url}`)
        .then(res=> res.json()).then(res =>{
            setPokeObj(res)
        });  */
        
       setPokeObj(pokeData)
      
    },[pokeData]);

if(Object.keys(pokeObj).length === 0){

    console.log("sda")
    return <h1>loading...</h1>
}

    return <div  className="card">
        <h1>{pokeData.name}</h1>
        <img src={pokeObj.sprites.front_default} width="200px" height="200px"></img>
    </div>;
}
export default Card;