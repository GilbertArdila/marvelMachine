import React, { useState,useEffect } from 'react';
import '../Styles';

const Cart = ({ character, send, state }) => {

let title;
character.name!==undefined?title=character.name:title=character.title;

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
    }else{
      const newArray= favorites.filter((favorite)=>favorite.id !== character.id)
      
      send('PULLOUTFAVORITE',{newFavoritesArray:newArray})
    }
    
  }

  const handleSelectedCharacter = () => {
    send('CHARACTER', { myCharacter: character })
    
  }

  //setting the image according to the isFavorite state
  let star;
  !isFavorite ? star = 'emptyStar.webp' : star = 'fullfilledStar.webp';

  
  return (
    <div className="Home-container"
    >
      <img
        className='Home-container_image'
        src={`${character.thumbnail.path
          }.${character.thumbnail.extension}`}
        alt={title}
        onClick={handleSelectedCharacter}
      />
      <img
        className='Home-container_star'
        src={star} alt='agregar a favoritos'
        onClick={
          handleOnClick
        }
      />


      <h2 className='Home-container_name'>{title}</h2>
    </div>
  )
}

export { Cart }










