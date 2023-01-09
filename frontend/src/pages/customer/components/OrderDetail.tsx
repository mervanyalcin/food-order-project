import { observer } from 'mobx-react-lite'
import React from 'react'
import { store } from 'store'

const OrderDetail = observer(() => {

  const { selectedFood } = store

  return (
    <div className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
      <div className="max-w-xl min-h-screen bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg max-w-xl h-full" src={`${process.env.PUBLIC_URL}/images/${selectedFood?.categoryName + "/" + selectedFood?.image}`} alt="" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{selectedFood?.name}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{selectedFood?.description}</p>
          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg ">
            Add Order
          </button>

          <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-900 rounded-lg " onClick={()=> {
            store.initializeSelectedFood()
          }}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
})

export default OrderDetail