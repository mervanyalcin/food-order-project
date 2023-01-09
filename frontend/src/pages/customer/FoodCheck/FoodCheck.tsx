import { observer } from 'mobx-react-lite'
import Back from 'pages/customer/components/Back'
import React, { useState } from 'react'
import { store } from 'store'


interface IFoodCheckProps { }
export const FoodCheck: React.FC<IFoodCheckProps> = observer(() => {
  const { selectedFood } = store
  const [piece, setPiece] = useState<number>(0)
  return (
    <div className='flex flex-col'>
      <div className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg max-w-xl h-full w-full " src={`${process.env.PUBLIC_URL}/images/${selectedFood?.categoryName + "/" + selectedFood?.image}`} alt="" />
        <div className="p-5 flex flex-col gap-y-4">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{selectedFood?.name}</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">{selectedFood?.description}</p>

          <h3 className='dark:text-white text-lg'>Şefe bir notunuz var mı?</h3>
          <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Şefe notunuzu buradan iletebilirsiniz"></textarea>

          <div className='flex gap-x-4'>
            <div className="piece-of-food-wrapper flex flex-col gap-y-2 w-[50%]">
              <h3 className='dark:text-white text-lg'>Adet</h3>
              <div className="button-wrapper">
                <button type="button" onClick={() => setPiece(piece !== 0 ? piece - 1 : piece)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  -
                </button>
                <span className='px-4 text-white'>{piece}</span>
                <button onClick={() => setPiece(piece + 1)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  +
                </button>
              </div>
            </div>
            <div className="number-of-table-wrapper flex flex-col gap-y-2 w-[50%]">
              <h3 className='dark:text-white text-lg'>Masa Numaranız</h3>
              <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">' placeholder='Masa Numaranız' />
            </div>
          </div>

          <div className='flex gap-x-6'>

            <button type="button" className="w-[50%] text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              Sepete Ekle
            </button>

            <button type="button" className="w-[50%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Sipariş Ver
            </button>

          </div>
        </div>
      </div>

      <Back />

    </div>
  )
})
