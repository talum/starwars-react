import React from 'react'

const Character = (props) => {
  return (
    <div>
      <h2>{props.character.name}</h2>
      <p>url: {props.character.url}</p>
      <p>birth year: {props.character.birth_year}</p>
      <p>gender: {props.character.gender}</p>
    </div>
  )
}

export default Character
