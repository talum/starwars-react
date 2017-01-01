import React from 'react'

class Button extends React.Component {

  render() {
    return(
      <button onClick={this.props.fetchData} className="waves-effect waves-light btn-large">Show More</button>
    )
  }
}

export default Button
