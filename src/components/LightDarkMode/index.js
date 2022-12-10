// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {darkModeOn: true}

  changeMode = () => {
    const {darkModeOn} = this.state
    this.setState({darkModeOn: !darkModeOn})
  }

  render() {
    const {darkModeOn} = this.state
    return (
      <div>
        {darkModeOn ? (
          <div className="container darkMode">
            <h1>Click To Change Mode</h1>
            <button onClick={this.changeMode} type="button">
              Light Mode
            </button>
          </div>
        ) : (
          <div className="container lightMode">
            <h1>Click To Change Mode</h1>
            <button onClick={this.changeMode} type="button">
              Dark Mode
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default LightDarkMode
