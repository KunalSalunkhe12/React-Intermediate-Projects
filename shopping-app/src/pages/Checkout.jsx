import React from 'react'
import { Link } from 'react-router-dom'

function Checkout() {
  return (
    <div className='checkout'>
        <div className="checkout-title">
           Thank You For Ordering!! 👍
        </div>
        <Link to="/"><button className='checkout-btn'>Buy more</button></Link>
        
    </div>
  )
}

export default Checkout