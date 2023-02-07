import React from 'react'
import './HeroStyles.css'
const hero = () => {
  return (
    <div className='hero'>
        <div className="container">
            <div className="contents">
                <div className="text">
                    <p style={{fontSize:'30px'}}>Always</p>
                </div>
                <h1 style={{fontSize:'60px'}}>Served Fresh</h1>
                <h1>Daily</h1>
                <button className='btn'>Delivery</button>
                <button className='btn'>Take-out</button>
            </div>
        </div>
      
    </div>
  )
}

export default hero
