import React,{useState,useEffect} from 'react';
import { Nav } from './Nav';
import {Cart} from './Cart';
import '../Styles';
import { Loader } from './Loader';

const Home = ({send,state}) => {
  const {favorites}=state.context
  

const [charactersData, setCharactersData] = useState([]);
 const {characters}=state.context
 
 
  useEffect(() => {
 
 if(characters.length!==0){
setCharactersData(characters.data.data.results)
 }
  
}, [characters])
 
 
  return (
    <>
    <Nav send={send} state={state}/>
    <div className='Home'>
    {characters.length===0 && <Loader/>}
    {charactersData.map((character)=>(
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