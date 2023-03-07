import {Component} from 'react'
import './index.css'

class ChangeMode extends Component {
  state = {
    isLightMode: true,
  }

  onClickChangeMode = () => {
    this.setState(prevMode => ({isLightMode: !prevMode.isLightMode}))
  }

  render() {
    const {isLightMode} = this.state
    const modeClassName = isLightMode ? 'dark-mode' : 'light-mode'
    const buttonText = isLightMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="page-container">
        <div className={`mode-card ${modeClassName}`}>
          <h1 className="change-mode-title">Click To Change Mode</h1>
          <button
            className="change-mode-button"
            type="button"
            onClick={this.onClickChangeMode}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default ChangeMode
