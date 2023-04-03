// Write your code here

import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0}

  startTimer = () => {
    this.timerId = setInterval(this.timer, 1000)
  }

  timer = () => {
    const {seconds} = this.state

    if (seconds === 60) {
      this.setState(prevState => ({
        minutes: prevState.minutes + 1,
        seconds: 0,
      }))
    } else {
      this.setState(prevState => ({
        minutes: prevState.minutes,
        seconds: prevState.seconds + 1,
      }))
    }
  }

  stopTimer = () => {
    clearInterval(this.timerId)
  }

  resetTimer = () => {
    clearInterval(this.timerId)
    this.setState({
      minutes: 0,
      seconds: 0,
    })
  }

  render() {
    const {minutes, seconds} = this.state

    const updatedMinutes = minutes < 10 ? `0${minutes}` : minutes

    const updatedSeconds = seconds < 10 ? `0${seconds}` : seconds

    return (
      <div className="appContainer">
        <h1 className="heading">Stopwatch</h1>

        <div className="timerContainer">
          <div className="timerImageContainer">
            <img
              className="timerImage"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p className="timerName">Timer</p>
          </div>
          <h1 className="timer">{`${updatedMinutes}:${updatedSeconds}`}</h1>
          <div className="buttonContainer">
            <button
              onClick={this.startTimer}
              type="button"
              className="startButton"
            >
              Start
            </button>
            <button
              onClick={this.stopTimer}
              type="button"
              className="stopButton"
            >
              Stop
            </button>
            <button
              onClick={this.resetTimer}
              type="button"
              className="resetButton"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
