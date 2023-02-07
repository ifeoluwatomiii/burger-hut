import React from 'react'
import './FoodStyles.css'

const Food = ({bgImg1,bgImg2}) => {
  return (
    <div style={{background: `url ('') no-reapeat center center/cover`}} className='food'>
      <div className="container">
        <div style={{background: `url('${bgImg1}') no-repeat center center/cover`, width:'100%', height:'80vh'}} className="left"></div>
        <div style={{background: `url('${bgImg2}') no-repeat center center/cover`, width:'100%', height:'80vh'}} className="left"></div>
        <div style={{background: `url('${bgImg1}') no-repeat center center/cover`, width:'100%', height:'80vh'}} className="left"></div>
       
      </div>
    </div>
  )
}

export default Food
