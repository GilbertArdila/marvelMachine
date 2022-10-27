import React from 'react'

const Favorites = ({state,send}) => {

  const{favorites}=state.context;
  console.log(favorites)
  return (
    <div>Favorites</div>
  )
}

export  {Favorites}