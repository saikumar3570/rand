import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}
  render() {
    const {number} = this.state

    const rand = Math.ceil(Math.random() * 100)

    getRandom = () => {
      this.setState({number: rand})
    }
    return (
      <div className="overall">
        <div className="innerCard">
          <h1>Random Number</h1>
          <p>Generate a random number in range of 0 to 100</p>
          <button type="button" onClick={this.getRandom}>
            Generate
          </button>
          <p>{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
