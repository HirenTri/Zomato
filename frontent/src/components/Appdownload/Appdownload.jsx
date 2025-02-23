import React from 'react'
import './Appdownload.css'
import { assets } from '../../assets/assets'
const Appdownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience <br/> Download Mobile App</p>
        <div className="app-download-content">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default Appdownload
