import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='max-w-xs mx-auto'>
      <Link to="/"><img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="" className='mb-4' /></Link>
      <h1 className='text-center text-md'>Habil Pizza Hızlı Sipariş Hattı <Link to="/login">Login</Link></h1>
      <p className='text-center text-sm mb-4'>Siparişinizi buradan doğrudan şefe iletebilirsiniz!</p>
    </div>
  )
}

export default Header