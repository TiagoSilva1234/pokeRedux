import Axios from 'axios';

export const fetchPokemons = ()=> {

    return async (dispatch)=>{
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=300")
        .then(res=> res.json()).then(res =>{
        dispatch({type:"SET_DATA", payload:res.results})
    });
}
  
}
export const fetchPokemonType = (t)=>{

    return async(dispatch)=>{
        let response =[];
        let pokemons =[];
        for(let i =1; i<300;i++){
            response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`,
            {
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
    
            if(response.data.types[0].type.name === t)
            {
                pokemons.push(response.data)
            }
        }
  
        dispatch({type:"SET_DATA", payload:pokemons})
}
}

