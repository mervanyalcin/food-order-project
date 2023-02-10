import { observer } from 'mobx-react-lite';
import React, { useState } from 'react'

interface IChefCheckProps {}
export const ChefCheck: React.FC<IChefCheckProps> = observer(() => {
  const [dateValue, setValue] = useState("2023-01-05");
  const date = new Date();
  const day = date.getUTCDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();


  const getDateHandle = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div className='max-w-6xl mx-auto'>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className='chef-filter-wrapper'>
          <div>
            <input
              type="date"
              className="date-filter"
              value={"2023-01-05"}
              onChange={getDateHandle}
            />
          </div>
        </div>

        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-theme-color dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Ürün ismi
              </th>
              <th scope="col" className="px-6 py-3">
                Müşteri notu
              </th>
              <th scope="col" className="px-6 py-3">
                Ürün açıklaması
              </th>
              <th scope="col" className="px-6 py-3">
                Masa numarası
              </th>
              <th scope="col" className="px-6 py-3">
                Adet
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Siparişi bitir</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Special Pizza
              </th>
              <td className="px-6 py-4">
                Zeytin olmasın
              </td>
              <td className="px-6 py-4">
                Mozeralla kaşar, salam, sosis, yeşil biber, yeşil zeytin, sucuk, mantar, domates, siyah zeytinli.
              </td>
              <td className="px-6 py-4">
                B6
              </td>
              <td className="px-6 py-4">
                2 adet
              </td>
              <td className="px-6 py-4 text-right">
                <button className="px-4 py-2 border-b-green-50 border font-medium text-blue-600 dark:text-blue-500 ">Bitir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
} )