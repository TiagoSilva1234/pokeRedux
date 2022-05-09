import React,{useEffect,useState} from 'react'
import './App.css';
import Pagination from './components/pagination'
import {Provider, useSelector,useDispatch} from "react-redux"
import Cards from './components/cards'
import {fetchPokemons,fetchPokemonType} from './redux/action.js'
function App() {
  const dispatch = useDispatch()
 const [currentPage,setCurrentPage] = useState(1);
 const[postsPerPage,setPostsPerPage] = useState(12);
 const [loading, setLoading] = useState(false);
  const poke = useSelector(state => state)


useEffect(()=>{
  //dispatch(fetchPokemons())
  dispatch(fetchPokemonType("grass"))

},[])

const paginate=(e)=>{
  setCurrentPage(e)
}
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPokes = poke.slice(indexOfFirstPost, indexOfLastPost)
 

  return (
    <div className="App">
      <div className="dropdown">

      </div>
<Cards loading={loading}pokemons={currentPokes}></Cards>
<Pagination postsPerPage={postsPerPage} paginate={paginate} totalPosts={poke.length}></Pagination>
    </div>

  );

}

export default App;
