import React from 'react'
import datas from "datas.json"
import { observer } from 'mobx-react-lite'
import { foodStore } from 'store'
import { Link } from 'react-router-dom'
import Back from '../components/Back'

interface IFoodsProps { }
export const Foods: React.FC<IFoodsProps> = observer(() => {

  const { setSelectedFood, selectedCategory } = foodStore

  const newDatas = datas.filter((data) => {
    return data.categoryName === selectedCategory?.categoryName
  })

  return (
    <div className='flex flex-col'>

      {
        newDatas.map((data) => (
          <Link to="/menu/order" onClick={() => setSelectedFood(data)}>
            <div className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mb-3">
              <img className="rounded-t-lg h-full" src={`${process.env.PUBLIC_URL}/images/${data.categoryName + "/" + data.image}`} alt="" />
              <div className="p-5">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data?.name}</h5>
                <p className="text-gray-700 dark:text-gray-400">{data?.description}</p>
              </div>
            </div>
          </Link>
        ))
      }
      <Back />
    </div>
  )
})