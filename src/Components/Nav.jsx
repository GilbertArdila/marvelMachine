import React from 'react'

const Nav = ({ send, state }) => {
  const { favorites } = state.context;

  const handleOnClick = () => {
    send('FAVORITES')
  }

  return (
    <div className='Nav'>
      <div className="Nav-container">
        <h2 className='Nav-title'>Marvel API</h2>
        <img className='Nav-hammer' src="spider.png" alt="spiderman logo" />
      </div>

      {favorites.length > 0 && <div className='Nav-container'>
        <img className='Nav-hammer' src="hamer.webp" alt="martillo thor" />
        <span className="nav-favorites" onClick={handleOnClick}>Favorites</span>
      </div>}


    </div>
  )
}

export { Nav }