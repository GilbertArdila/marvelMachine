import React,{useState} from 'react'

const Cart = ({character,send,state}) => {


    const [isFavorite, setIsFavorite] = useState(false);
    const [pushFavorite, setPushFavorite] = useState(character);

   const handleOnClick=()=>{
        send('SETFAVORITES',{newFavorite:pushFavorite})
        console.log(state.context)
    }

    const handleSelectedCharacter=()=>{
      send('CHARACTER',{myCharacter:character})
      console.log(state.context)
    }

    let star;
    !isFavorite?star='../../public/emptyStar.webp' :star='../../public/fullfilledStar.webp'; 
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

export  {Cart}










