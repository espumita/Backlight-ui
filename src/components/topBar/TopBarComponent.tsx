import * as React from 'react'
import TopBarImage from '../../../images/backlight-top-bar-image.png'
import './topBarStyle.css'

const TopBar = () => {
    return (
      <div className="top-bar">
          <div className="top-bar-content">
            <img src={TopBarImage} className="top-bar-image" />
            <div className="top-bar-tittle">Backlight</div>
          </div>
      </div>
    )
  }

  export default TopBar
