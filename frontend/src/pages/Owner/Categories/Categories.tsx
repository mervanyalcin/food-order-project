import { observer } from "mobx-react-lite";
import React from "react";
import { TiPlus } from "react-icons/ti";
import CategoryAddForm from "../components/AddCategoryForm";
import { AdminStore } from "../store";
import { FaEdit } from "react-icons/fa";
import CategorySetForm from "../components/SetCategoryForm";
import { toJS } from "mobx";

interface ICategoryProps { }
export const Category: React.FC<ICategoryProps> = observer(() => {
  const {
    allCategories,
    isSetCategoryModalOpen,
    getAllCategories,
    setIsSetCategoryModalOpen,
    setIsAddCategoryModalOpen,
    setSelectedCategory,
    initializeSelectedCategory
  } = AdminStore;

  React.useEffect(() => {
    getAllCategories();
  }, [isSetCategoryModalOpen]);

  return (
    <div className="">
      <div className="flex relative">
        <h1 className="mb-4 text-3xl">Kategoriler</h1>
        <div className="absolute right-0">
          <button
            className="text-sm ml-10 flex bg-green-800 text-white px-5 py-2.5 rounded-lg"
            onClick={() => {
              setIsAddCategoryModalOpen();
            }}
          >
            kategori ekle <TiPlus className=" self-center" />
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
        {toJS(allCategories).map((category, index) => {
          return (
            <div className="relative flex items-center shadow-md md:flex-row md:max-w-xl xs:w-full bg-gray-800 rounded-lg hover:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-900 text-white h-[240px]" key={index}>
              <button
                className="absolute right-2  top-2"
                onClick={() => {
                  setIsSetCategoryModalOpen();
                  setSelectedCategory(category)
                }}
              >
                <FaEdit />
              </button>
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg xs:w-full"
                src={category.img}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">
                  {category.name}
                </h5>
              </div>
            </div>
          )
        })}
      </div>

      <CategoryAddForm />
      <CategorySetForm />
    </div>
  );
});
