import React from 'react'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Work Shoes Chincha - Todos los derechos reservados</p>
      <p className='icons'>
          <AiFillFacebook />
          <AiFillInstagram />
      </p>
    </div>
  )
}

export default Footer