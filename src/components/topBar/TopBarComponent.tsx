import * as React from 'react'
import TopBarImage from "./bl_logo_small.svg"
import './topBarStyle.css'

const TopBar = () => {
    return (
      <div className="top-bar">
          <div className="top-bar-content">
            <img src={TopBarImage} className="top-bar-image" alt="Backlight UI" />
            <div className="top-bar-tittle">Backlight</div>
            <div className="top-bar-version">1.0.7</div>
          </div>
      </div>
    )
  }

  export default TopBar
