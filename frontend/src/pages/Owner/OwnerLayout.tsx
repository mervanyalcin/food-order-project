import { observer } from 'mobx-react-lite'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

interface IOwnerLayoutProps {}
export const OwnerLayout: React.FC<IOwnerLayoutProps> = observer(() => {
  return (
    <div className='mt-8'>

      <Header />
      <div className=' max-w-6xl mx-auto'>
        <Outlet />
      </div>
    </div>
  )
})
