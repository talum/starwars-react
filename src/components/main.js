import React from 'react'
import axios from 'axios'
import Movie from './Movie'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {results: []}
  }

  componentWillMount() {
    axios.get('http://swapi.co/api/people/').then((response) => {
      var results = response.data.results
      this.setState({results: results})
    })
  }

  render() {
    const movies = this.state.results
    const movieItems = movies.map((movie, id) => <Movie key={id} movie={movie}/>)

    return (
      <div>{movieItems}</div>
    )
  }
}

export default Main
