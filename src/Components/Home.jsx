import React,{useState,useEffect} from 'react';
import { Nav } from './Nav';
import {Cart} from './Cart';
import '../Styles';
import { Loader } from './Loader';
import { Searcher } from './Searcher';

const Home = ({send,state}) => {
  const {favorites}=state.context
  
const [searchedCharacter, setSearchedCharacter] = useState('');
const [charactersData, setCharactersData] = useState([]);
 const {characters}=state.context
 
  useEffect(() => {
 
 if(characters.length!==0){
setCharactersData(characters.data.data.results)
 
 }
  
}, [characters])
 
const characterSearched=charactersData.filter((character)=>{
  return(
    character.name.toLowerCase().includes(searchedCharacter.toLowerCase())
  )
})
 
  return (
    <>
    <Nav send={send} state={state}/>
    <Searcher value={searchedCharacter} onChange={(e)=>setSearchedCharacter(e.target.value)}/>
    <div className='Home'>
    {characters.length===0 && <Loader/>}
    {characters.length!==0 && characterSearched.map((character)=>(
     <Cart 
     character={character}  
     key={character.id}
     send={send}
     state={state}
     />
      
    ))}

    </div>
    </>
  )
}

export { Home}