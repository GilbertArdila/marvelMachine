import React from 'react'

const Favorites = ({state,send}) => {

  const{favorites}=state.context;
   

  const handleOnClick=()=>{
    send('BACK')
  }

  return (
    <>
    <span className='Favorites-container_back'
    
    onClick={handleOnClick}>⬅</span>
    <div className="Favorites">
        {favorites.map((character)=>(
      <div className="Favorites-container"
      key={character.id}
      >
        <img
          className='Favorites-container_image'
          src={`${character.thumbnail.path
            }.${character.thumbnail.extension}`}
          alt={character.name}
          
        />
  
        <h2 className='Favorites-container_name'>{character.name}</h2>
      </div>
    ))}
    </div>
  
    
    
    
    </>
  )
}

export  {Favorites}