import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (

    <>
      <div className='max-w-xs mx-auto'>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="" className='mb-4' />
        </Link>
      </div>

      {/* <div className='max-w-6xl mx-auto mb-4'>
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/admin" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-gray-400">
                Admin
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <Link to="/admin/chef" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-gray-400">
                  Şef Listesi 
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                 Flowbite
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div> */}
    </>

  )
}

export default Header