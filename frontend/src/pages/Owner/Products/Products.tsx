import { observer } from 'mobx-react-lite'
import React from 'react'
import { TiPlus } from "react-icons/ti";
import SetProducts from '../components/SetProducts';
import { AdminStore } from '../store';

interface IProductsProps { }
export const Products: React.FC<IProductsProps> = observer(() => {
  return (
    <div>

      <div className='flex relative'>
        <h1 className='mb-4 text-3xl'>Ürünler </h1>
        <div className='absolute right-0'>
          <button className='text-sm ml-10 flex bg-green-800 text-white px-5 py-2.5 rounded-lg' onClick={()=> {
            AdminStore.setIsProductModalOpen()
          }}> ürün ekle <TiPlus className=' self-center' /></button>
        </div>
      </div>


      <div className="grid md:grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">

        <div className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-theme-color">
          <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={`${process.env.PUBLIC_URL + "/images/thumbnails/pizza.jpg"}`} alt="" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pizza</h5>
          </div>
        </div>

        <div className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-theme-color">
          <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={`${process.env.PUBLIC_URL + "/images/thumbnails/drinks.jpg"}`} alt="" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">İçeçekler</h5>
          </div>
        </div>

      </div>

      <SetProducts productStore={AdminStore} />

    </div>
  )
})
 