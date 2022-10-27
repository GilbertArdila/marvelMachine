import React, { useState,useEffect } from 'react'

const Cart = ({ character, send, state }) => {


  const [isFavorite, setIsFavorite] = useState(false);
  const [pushFavorite, setPushFavorite] = useState(character);
  const{favorites}=state.context;


  //checking favorites list to set or unset isFavorite state
 useEffect(() => {
  if(favorites.length > 0){
    favorites.map((favorite)=>{
   favorite.id===character.id?setIsFavorite(true):null
 })
  }
 }, [favorites])
 
 
  
 
  

  const handleOnClick = () => {
    setIsFavorite(!isFavorite)
    if(!isFavorite){
       send('SETFAVORITES', { newFavorite: pushFavorite })
       

    }
    
  }

  const handleSelectedCharacter = () => {
    send('CHARACTER', { myCharacter: character })
    
  }

  //setting the image according to the isFavorite state
  let star;
  !isFavorite ? star = '../../public/emptyStar.webp' : star = '../../public/fullfilledStar.webp';

  
  return (
    <div className="Home-container"
    >
      <img
        className='Home-container_image'
        src={`${character.thumbnail.path
          }.${character.thumbnail.extension}`}
        alt={character.name}
        onClick={handleSelectedCharacter}
      />
      <img
        className='Home-container_star'
        src={star} alt='agregar a favoritos'
        onClick={
          handleOnClick
        }
      />


      <h2 className='Home-container_name'>{character.name}</h2>
    </div>
  )
}

export { Cart }










