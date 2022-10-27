import React,{useState,useEffect} from 'react';
import { Nav } from './Nav';
import {Cart} from './Cart';
import '../Styles';

const Home = ({send,state}) => {

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
    {characters.length===0 && <p>...cargando</p>}
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