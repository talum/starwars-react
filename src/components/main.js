import React from 'react'
import axios from 'axios'
import Character from './Character'
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
    const characters = this.state.results
    const characterItems = characters.map((character, id) => <Character key={id} character={character}/>)

    return (
      <div>
        {characterItems}
        { this.state.shouldShowMore && <Button fetchData={this.fetchData}/> }
      </div>
    )
  }
}

export default Main
