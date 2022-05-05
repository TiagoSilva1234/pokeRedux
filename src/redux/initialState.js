
const initialState = [] 
const data = fetch("https://pokeapi.co/api/v2/pokemon?limit=300")
.then(res=> res.json()).then(res =>{
initialState = res.results;
});



 


export default initialState;