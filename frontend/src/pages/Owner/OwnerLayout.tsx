import { observer } from 'mobx-react-lite'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { authStore } from 'store'
import AdminMenu from './components/AdminMenu'
import Header from './components/Header'

interface IOwnerLayoutProps {}
export const OwnerLayout: React.FC<IOwnerLayoutProps> = observer(() => {

  if (authStore.isLoginSuccess === false) {
    window.location.href = "/login";
    return <></>
  }


  return (
    <div className='mt-8'>
      <Header />
      <div className=' max-w-6xl mx-auto  pb-20'>
        <AdminMenu />
        <Outlet /> 
      </div>
    </div>
  )
})
