import React,{useState,useEffect} from 'react';

import '../Styles';
import {Cart} from './Cart';

const Home = ({send,state}) => {
  console.log(state.context)

const [charactersData, setCharactersData] = useState([]);
 const {characters}=state.context
 
 
  useEffect(() => {
 
 if(characters.length!==0){
setCharactersData(characters.data.data.results)
 }
  
}, [characters])
 
 
  return (
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
  )
}

export { Home}