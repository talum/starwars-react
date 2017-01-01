import React from 'react'
import axios from 'axios'
import Movie from './Movie'
import Button from './Button'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {results: [], shouldShowMore: false, page: 1}
    this.fetchData = this.fetchData.bind(this)
  }

  fetchData() {
    let page = this.state.page
    let results = this.state.results
    const baseUrl = "http://swapi.co/api/people/"

    axios.get( baseUrl + "?page=" + page ).then((response) => {
      let newResults = results.concat(response.data.results)
      let shouldShowMore = !!response.data.next

      this.setState({
        results: newResults,
        shouldShowMore: shouldShowMore,
        page: page + 1
      })
    })
  }

  componentWillMount() {
    this.fetchData()
  }

  render() {
    const movies = this.state.results
    const movieItems = movies.map((movie, id) => <Movie key={id} movie={movie}/>)

    return (
      <div>
        {movieItems}
        { this.state.shouldShowMore && <Button fetchData={this.fetchData}/> }
      </div>
    )
  }
}

export default Main
