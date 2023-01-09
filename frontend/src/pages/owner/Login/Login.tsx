import { observer } from 'mobx-react-lite'
import React from 'react'
import { Link } from 'react-router-dom'


interface ILoginProps { }
export const Login: React.FC<ILoginProps> = observer(() => {

  const loginHandle = () => {

  }
  return (
    <div className='max-w-sm bg-slate-700 fixed px-6 py-6 min-w-max w-[600px] md:w-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' >
      <h1 className='text-white mb-4'>
        Yetkili giriş ekranı
      </h1>
      <form>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Adresiniz</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Şifreniz</label>
          <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Şifreniz' required />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={loginHandle}>
          Login
        </button>
        <Link to="/admin/chef" > Şef Ekranı</Link>
        --
        <Link to="/admin" >Admin</Link>
      </form>
    </div>
  )
})