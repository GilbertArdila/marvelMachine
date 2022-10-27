import React from 'react';
import {Home,Favorites,Character} from '../Components'

const Layout = ({state,send}) => {

    const renderContext=()=>{
        if(state.matches('home'))return <Home send={send} state={state}/>
        if(state.matches('selectedCharacter'))return <Character send={send} state={state}/>
        if(state.matches('favotitesCharacters'))return <Favorites send={send} state={state}/>
        return null
    }
  return (
    <div className='Layout'>{renderContext()}</div>
  )
}

export  {Layout}