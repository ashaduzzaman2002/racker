import React from 'react'
import '../styles/Arrow.css'
import ArrowImg from '../assets/images/double-arrow.svg'

const ArrowGroups = () => {
  return (
    <div className='arrowContainer'>
      <div className='arrowout' style={{borderRadius: "0px 5px 5px 0px"}}>
        <img src={ArrowImg} alt="" />
      </div>

      <div className='arrowout'>
        <img src={ArrowImg} alt="" />
      </div>
    </div>
  )
}

export default ArrowGroups