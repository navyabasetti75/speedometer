// Write your code here
import './index.css'

import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}

  accelerate = () => {
    this.setState(prevState =>
      prevState.count < 200 ? {count: prevState.count + 10} : {count: 200},
    )
  }

  brake = () => {
    this.setState(prevState =>
      prevState.count > 0 ? {count: prevState.count - 10} : {count: 0},
    )
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />

        <h1 className="para1">
          Speed is <span className="counter">{count}mph</span>
        </h1>

        <p className="para2">Min limit is 0mph, Max limit is 200mph</p>
        <div>
          <button className="button" onClick={this.accelerate} type="button">
            Accelerate
          </button>
          <button className="button1" onClick={this.brake} type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
