import React from 'react'
import './Plants.css'
import plnat_1 from '../../assets/heroimg.jpg'
import apple from '../../assets/apple.png'
import banana from '../../assets/banana.png'
import peas from '../../assets/peas.png'
const Plants = () => {
  return (
    <div className='plants container'>
        <div className="plant">
            <img src={apple} alt="" />
            <div className="caption">
                <p>Apple</p>
            </div>
        </div>
        <div className="plant">
            <img src={banana} alt="" />
            <div className="caption">
                <p>Banana</p>
            </div>
        </div>
        <div className="plant">
            <img src={peas} alt="" />
            <div className="caption">
                <p>Peas</p>
            </div>
        </div>
    </div>
  )
}

export default Plants
