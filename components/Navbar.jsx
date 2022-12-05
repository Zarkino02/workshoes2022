import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities} = useStateContext();

  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>
          <Image width={80} height={40} src='/img/Logo.jpg' alt='Logo WorkShoes'/>
        </Link>
      </p>

      <button type='button' classname='cart-icon' onClick={()=> setShowCart(true)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
        </button>
        {showCart && <Cart/>}
    </div>
  )
}

export default Navbar