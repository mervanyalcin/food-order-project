import { observer } from 'mobx-react-lite'
import React from 'react'
import { Outlet } from "react-router-dom"
import Header from './components/Header'

interface IMainLayoutProps { }
export const MainLayout: React.FC<IMainLayoutProps> = observer(() => {
  return (
    <div className='mt-8'>

      <Header />
      <div className=' max-w-xl mx-auto'>
        <Outlet />
      </div>
    </div>
  )
})
