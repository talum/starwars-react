import React from 'react'

class Button extends React.Component {

  render() {
    return(
      <button onClick={this.props.fetchData}>Show More</button>
    )
  }
}

export default Button
