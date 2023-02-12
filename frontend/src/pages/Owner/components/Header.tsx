import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (

    <>
      <div className='max-w-xs mx-auto'>
        <Link to="/admin">
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="" className='mb-4' />
        </Link>
      </div>
    </>

  )
}

export default Header