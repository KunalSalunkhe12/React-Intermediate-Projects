import React from 'react'
import { Link } from 'react-router-dom'
import  {AiOutlineShoppingCart} from 'react-icons/ai'
import './Header.css'

function Header() {
  return (
    <nav>
        <Link to='/'>Shopping Kart</Link>
        <AiOutlineShoppingCart className='cart-icon'/>
    </nav>
  )
}

export default Header