// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  generateNumber = () => {
    const randomNum = Math.random() * 100
    const ceilNum = Math.ceil(randomNum)
    this.setState({num: ceilNum})
  }

  render() {
    const {num} = this.state
    return (
      <div className="bg-image">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="btn-random"
            onClick={this.generateNumber}
          >
            Generate
          </button>
          <p className="number">{num}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
