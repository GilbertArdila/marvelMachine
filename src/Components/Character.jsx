import React from 'react'

const Character = ({state,send}) => {

  const character=state.context.selectedCharacter[0];
  const comics=character.comics.items.map((character)=>character.name).join(', ')

  const handleBack=()=>{
    send('BACK')
  }

  return (
    <div className="Character-container"
    > 
    <span className="Character-container_back"
    onClick={handleBack}
    >⬅</span>
     <h2 className='Character-container_name'>{character.name}</h2>
       <img 
       className='Character-container_image'
       src={`${character.thumbnail.path
     }.${character.thumbnail.extension}`}
      alt={character.name} />
     <h3 className='Character-container_description'>{character.description}</h3>
   
     <p className='Character-container_comicsContent' ><span className='Character-container_comics'>COMICS:{' '}</span>{comics}</p>
     </div>
  )
}

export {Character}