import { observer } from 'mobx-react-lite'
import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminMenu from '../components/AdminMenu' 

interface IAdminProps { }
export const Admin: React.FC<IAdminProps> = observer(() => {
  return (
    <div>

      <AdminMenu />

      <div className='mb-6 mt-6 px-6'>
        <Outlet /> {/* Admin menu */}
      </div>
    </div>
  )
})
