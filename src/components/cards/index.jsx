import React from "react";
import './index.scss'
import Card from '../card'

const Cards = ({pokemons, loading})=>{
    
    if(loading){
        
        return <h1>loading...</h1>
    }

    return <div className="cards">
       {pokemons.map(res =>{
   return <Card  pokeData={res}/>
    })}
    </div>;
}
export default Cards;