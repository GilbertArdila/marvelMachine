import React from 'react';
import '../Styles'

const Searcher = ({value,onChange}) => {
  return (
    <input className='Searcher' placeholder='Find...' value={value} onChange={onChange}/>
  )
}

export  {Searcher}