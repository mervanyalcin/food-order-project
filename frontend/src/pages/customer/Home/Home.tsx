import { observer } from 'mobx-react-lite'
import React from 'react'
import { Link } from 'react-router-dom'
import { store } from 'store'


const mainCategories = [
  {
    "id": "1",
    "name": "Pizzalar",
    "image": "pizza.jpg",
    "categoryName": "pizza",
  },
  {
    "id": "2",
    "name": "Tatlılar",
    "image": "deserts.jpg",
    "categoryName": "deserts",
  },
  {
    "id": "3",
    "name": "İçecekler",
    "image": "drinks.jpg",
    "categoryName": "drinks",
  },
  {
    "id": "4",
    "name": "Kahvaltı",
    "image": "breakfast.jpg",
    "categoryName": "breakfast",
  },
  {
    "id": "5",
    "name": "İtalyan Mutfağı",
    "image": "italian-kitchen.jpg",
    "categoryName": "italian-kitchen",
  },
  {
    "id": "6",
    "name": "Yemek Çeşitleri",
    "image": "food-types.jpg",
    "categoryName": "food-types",
  },
  {
    "id": "7",
    "name": "Izgaralar",
    "image": "grilled.jpg",
    "categoryName": "grilled",
  },
  {
    "id": "8",
    "name": "Salads",
    "image": "salads.jpg",
    "categoryName": "salads",
  },
  {
    "id": "9",
    "name": "Wraps",
    "image": "wraps.jpg",
    "categoryName": "wraps",
  },
]

interface IHomeProps { }
export const Home: React.FC<IHomeProps> = observer(() => {

  const {setSelectedCategory} = store

  return (
    <>

      <div className="flex flex-col max-w-xl mx-auto">
        {
          mainCategories.map((data, i) => (
            <Link to={`menu/`} key={data.id} onClick={()=> {
              setSelectedCategory(data)
            }}>
              <div className={`flex w-full p-12 mb-2 justify-center overflow-hidden relative bg-center bg-no-repeat`} style={{ backgroundImage: `url(${process.env.PUBLIC_URL + "/images/thumbnails/" + data.image})` }} key={data.id}>
                <p className='z-[10] text-xl font-bold text-white'>{data.name}</p>
                <div className='opacity-40 z-[9] h-full w-full bg-black absolute top-0 left-0'></div>
              </div>
            </Link>
          ))
        }
      </div>
    </>
  )
})