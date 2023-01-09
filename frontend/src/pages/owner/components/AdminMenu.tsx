import { observer } from 'mobx-react-lite'
import React from 'react'
import { Link } from 'react-router-dom'

interface IHeaderProps { }
const AdminMenu: React.FC<IHeaderProps> = observer(() => {
  return (
    <div className='px-6'>

      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li className="mr-2">
          <Link to="/admin/settings" aria-current="page" className="inline-block p-4 text-blue-600 bg-gray-800 rounded-t-lg active dark:text-blue-500">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Ayarlar</p>
          </Link>
        </li>
        <li className="mr-2">
          <Link to="/admin/categories" aria-current="page" className="inline-block p-4 text-blue-600 bg-gray-800 rounded-t-lg active dark:text-blue-500">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Kategoriler</p>
          </Link>
        </li>
        <li className="mr-2">
          <Link to="/admin/products" aria-current="page" className=" inline-block p-4 text-blue-600 bg-gray-800 rounded-t-lg active dark:text-blue-500">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Ürünler</p>
          </Link>
        </li>
        <li className="mr-2">
          <Link to="/admin/chef" aria-current="page" className=" inline-block p-4 text-blue-600 bg-gray-800 rounded-t-lg active dark:text-blue-500">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Sipariş Listesi</p>
          </Link>
        </li>
      </ul>

    </div>
  )
})

export default AdminMenu