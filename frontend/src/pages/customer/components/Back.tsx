import React from 'react'
import { useNavigate } from 'react-router-dom'

const Back = () => {
  const navigate = useNavigate()
  return (
    <div className='mt-6 mb-10 self-end'>
      <button onClick={()=> navigate(-1) } className="self-end text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">
        Geri
      </button>
    </div>
  )
}

export default Back