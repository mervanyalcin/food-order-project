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
    return data.categoryName === selectedCategory?.name
  })

  return (
    <div className='flex flex-col'>

      {
        newDatas.map((data) => (
          <Link to="/menu/order" onClick={() => setSelectedFood(data)}>
            <div className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-theme-color dark:border-gray-200 mb-3">
              <img className="rounded-t-lg h-full" src={`${process.env.PUBLIC_URL}/images/${data.categoryName + "/" + data.image}`} alt="" />
              <div className="p-5">
                <h5 className="text-2xl font-bold tracking-tight text-theme-text-color dark:text-theme-text-color">{data?.name}</h5>
                <p className="text-theme-text-color dark:text-theme-text-color">{data?.description}</p>
              </div>
            </div>
          </Link>
        ))
      }
      <Back />
    </div>
  )
})