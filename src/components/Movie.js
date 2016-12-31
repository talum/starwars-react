import React from 'react'

const Movie = (props) => {
  return (
    <div>
      <h1>{props.movie.name}</h1>
      <p>url: {props.movie.url}</p>
      <p>birth year: {props.movie.birth_year}</p>
      <p>gender: {props.movie.gender}</p>
    </div>
  )
}

export default Movie
