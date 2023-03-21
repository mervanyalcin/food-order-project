import { observer } from 'mobx-react-lite';
import { ICreateProductModel } from 'models';
import React from 'react';
import { useForm } from 'react-hook-form';
import { AdminStore } from '../store';

interface IProductAddFormProps {
}
const ProductAddForm: React.FC<IProductAddFormProps> = observer(() => {
  const { isAddProductModalOpen, allCategories, setIsAddProductModalOpen, createProduct, getAllCategories } = AdminStore
  const [categoryNames, setCategoryNames] = React.useState<any>([])

  const {
    handleSubmit,
    control,
    register,
    watch,
    setValue,
    clearErrors,
    reset,
    formState: { errors, dirtyFields },
  } = useForm({
    defaultValues: {
      name: "",
      img: "",
      mainCategory: '',
      description: '',
      price: '',
    },
  });
  const watcher = watch();

  const submitHandle = async ({
    name: name,
    img: img,
    mainCategory: mainCategory,
    description: description,
    price: price
  }: ICreateProductModel) => {
    try {
      await createProduct({
        img: img,
        name: name,
        mainCategory: mainCategory,
        description: description,
        price: price,
      });
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (allCategories.length === 0) {
      getAllCategories()
    }
    const all = allCategories.map((data: any) => data?.name);
    setCategoryNames(all)
  }, [allCategories])

  return (
    <>
      {isAddProductModalOpen && (
        <div className="fixed w-full h-full bg-black/60 left-0 top-0">
          <div
            id="medium-modal"
            tabIndex={-1}
            className="fixed flex items-center justify-center z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
          >
            <div className="relative w-full h-full max-w-lg md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-theme-color">
                <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-theme-text-color">
                    Ürün Ekle
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-theme-text-color"
                    data-modal-hide="medium-modal"
                    onClick={() => {
                      setIsAddProductModalOpen();
                    }}
                  >
                  </button>
                </div>

                {/* Modal Content */}
                <form
                  className="modal-body"
                  onSubmit={handleSubmit(submitHandle)}
                >
                  <div className="px-6 flex flex-col">
                    <div className="mb-3 mt-6">
                      <div className="relative mb-6">
                        <input
                          id="name"
                          type="text"
                          className={`bg-transparent rounded-[5px] focus:outline-double text-theme-text-color border-b-2  py-4 pl-6 peer duration-300 text-xs font-satoshi-medium w-full ${errors.name ? "border-[#f32f26]" : null
                            }`}
                          {...register("name", {
                            required: "Lütfen kategori adını yazınız.",
                          })}
                        />
                        <label
                          htmlFor="name"
                          className={` cursor-text peer-focus:-top-2.5 peer-focus:bg-theme-color transition-all select-none duration-300 px-1 absolute  left-6 text-xs font-satoshi-medium ${watcher.name
                            ? "bg-theme-color -top-2.5"
                            : "top-4"
                            } ${errors.name
                              ? "text-[#f32f26]"
                              : "text-[#919191]"
                            }`}
                        >
                          Ürünün Adı*
                        </label>
                        {errors.name && (
                          <p className=" text-xs text-[#f32f26] mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="relative mb-6">
                        <select id="mainCategory"
                          className={`bg-transparent rounded-[5px] focus:outline-double text-theme-text-color border-b-2  py-4 pl-6 peer duration-300 text-xs font-satoshi-medium w-full  ${errors.mainCategory ? "border-[#f32f26]" : null
                            }`}
                          {...register("mainCategory", {
                            required: "Lütfen fotoğraf seçiniz.",
                          })} onClick={() => {

                          }}>

                          {
                            categoryNames.map((category: any) => (
                              <option value={category} className='px-6'>{category}</option>
                            ))
                          }

                        </select>

                        <label
                          htmlFor="mainCategory"
                          className={` cursor-text peer-focus:-top-2.5 peer-focus:bg-theme-color transition-all select-none duration-300 px-1 absolute  left-6 text-xs font-satoshi-medium ${watcher.mainCategory
                            ? "bg-theme-color -top-2.5"
                            : "top-4"
                            } ${errors.mainCategory ? "text-[#f32f26]" : "text-[#919191]"
                            }`}
                        >
                          Ürünün Kategorisi*
                        </label>

                        {errors.mainCategory && (
                          <p className=" text-xs text-[#f32f26] mt-1">
                            {errors.mainCategory.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="relative mb-6">
                        <input
                          id="catImg"
                          type="text"
                          className={`bg-transparent rounded-[5px] focus:outline-double text-theme-text-color border-b-2  py-4 pl-6 peer duration-300 text-xs font-satoshi-medium w-full ${errors.img ? "border-[#f32f26]" : null
                            }`}
                          {...register("img", {
                            required: "Lütfen fotoğraf seçiniz.",
                          })}
                        />
                        <label
                          htmlFor="img"
                          className={` cursor-text peer-focus:-top-2.5 peer-focus:bg-theme-color transition-all select-none duration-300 px-1 absolute  left-6 text-xs font-satoshi-medium ${watcher.img
                            ? "bg-theme-color -top-2.5"
                            : "top-4"
                            } ${errors.img ? "text-[#f32f26]" : "text-[#919191]"
                            }`}
                        >
                          Ürünün Fotoğraf Linki*
                        </label>
                        {errors.img && (
                          <p className=" text-xs text-[#f32f26] mt-1">
                            {errors.img.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="relative mb-6">
                        <input
                          id="price"
                          type="text"
                          className={`bg-transparent rounded-[5px] focus:outline-double text-theme-text-color border-b-2  py-4 pl-6 peer duration-300 text-xs font-satoshi-medium w-full ${errors.price ? "border-[#f32f26]" : null
                            }`}
                          {...register("price", {
                            required: "Lütfen fotoğraf seçiniz.",
                          })}
                        />

                        <label
                          htmlFor="price"
                          className={` cursor-text peer-focus:-top-2.5 peer-focus:bg-theme-color transition-all select-none duration-300 px-1 absolute  left-6 text-xs font-satoshi-medium ${watcher.price
                            ? "bg-theme-color -top-2.5"
                            : "top-4"
                            } ${errors.price ? "text-[#f32f26]" : "text-[#919191]"
                            }`}
                        >
                          Ürünün Fiyatı*
                        </label>

                        {errors.price && (
                          <p className=" text-xs text-[#f32f26] mt-1">
                            {errors.price.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="relative mb-6">
                        <input
                          id="description"
                          type="text"
                          className={`bg-transparent rounded-[5px] focus:outline-double text-theme-text-color border-b-2  py-4 pl-6 peer duration-300 text-xs font-satoshi-medium w-full ${errors.description ? "border-[#f32f26]" : null
                            }`}
                          {...register("description", {
                            required: "Lütfen fotoğraf seçiniz.",
                          })}
                        />

                        <label
                          htmlFor="description"
                          className={` cursor-text peer-focus:-top-2.5 peer-focus:bg-theme-color transition-all select-none duration-300 px-1 absolute  left-6 text-xs font-satoshi-medium ${watcher.description
                            ? "bg-theme-color -top-2.5"
                            : "top-4"
                            } ${errors.description ? "text-[#f32f26]" : "text-[#919191]"
                            }`}
                        >
                          Ürünün Açıklaması*
                        </label>

                        {errors.description && (
                          <p className=" text-xs text-[#f32f26] mt-1">
                            {errors.description.message}
                          </p>
                        )}
                      </div>
                    </div>

                  </div>

                  <div className="flex justify-end px-6 py-3 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                      data-modal-hide="medium-modal"
                      type="button"
                      className="text-gray-500 bg-red-500 hover:bg-red-600  focus:outline-none rounded-lg text-sm font-medium px-5 py-2.5 dark:bg-red-500 dark:text-white  dark:hover:text-white dark:hover:bg-red-600"
                      onClick={() => {
                        setIsAddProductModalOpen();
                      }}
                    >
                      Vazgeç
                    </button>

                    <button
                      data-modal-hide="medium-modal"
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-green-800  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700"
                    >
                      Ekle
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default ProductAddForm