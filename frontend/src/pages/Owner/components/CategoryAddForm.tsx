import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Admin, AdminStore } from "../store";
import axios from "axios";
import { useForm } from "react-hook-form";

interface ICategoryAddFormProps {}
const CategoryAddForm: React.FC<ICategoryAddFormProps> = observer(() => {
  const [file, setFile] = useState<any>(null);

  interface INewCategory {
    createdBy: string;
    categoryName: string;
    categoryImg: string;
  }

  const {
    handleSubmit,
    control,
    register,
    watch,
    setValue,
    clearErrors,
    formState: { errors, dirtyFields },
  } = useForm({
    defaultValues: {
      catName: "",
      catImg: "",
    },
  });
  const watcher = watch();

  const submitHandle = async ({
    catName,
    catImg,
  }: {
    catName: string;
    catImg: string;
  }) => {
    try {
      await AdminStore.createCategory({
        catImg: catImg,
        catName: catName,
      });
    } catch (error) {}
  };

  return (
    <>
      {AdminStore.isCategoryModalOpen && (
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
                    Kategori Ekle veya Düzenle
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-theme-text-color"
                    data-modal-hide="medium-modal"
                    onClick={() => {
                      AdminStore.setIsCategoryModalOpen();
                    }}
                  >
                    Close
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                {/* Modal Content */}
                <form
                  className="modal-body"
                  onSubmit={handleSubmit(submitHandle)}
                >
                  <div className="px-6 flex flex-col">
                    <div className="mb-6 mt-6">
                      <div className="relative mb-6">
                        <input
                          id="catName"
                          type="text"
                          className={`bg-transparent rounded-[5px] focus:outline-double text-theme-text-color border-b-2  py-4 pl-6 peer duration-300 text-xs font-satoshi-medium w-full ${
                            errors.catName ? "border-[#f32f26]" : null
                          }`}
                          {...register("catName", {
                            required: "Lütfen kategori adını yazınız.",
                          })}
                        />
                        <label
                          htmlFor="catName"
                          className={` cursor-text peer-focus:-top-2.5 peer-focus:bg-theme-color transition-all select-none duration-300 px-1 absolute  left-6 text-xs font-satoshi-medium ${
                            watcher.catName
                              ? "bg-theme-color -top-2.5"
                              : "top-4"
                          } ${
                            errors.catName ? "text-[#f32f26]" : "text-[#919191]"
                          }`}
                        >
                          Kategori Adı*
                        </label>
                        {errors.catName && (
                          <p className=" text-xs text-[#f32f26] mt-1">
                            {errors.catName.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="relative mb-6">
                        <input
                          id="catImg"
                          type="text"
                          className={`bg-transparent rounded-[5px] focus:outline-double text-theme-text-color border-b-2  py-4 pl-6 peer duration-300 text-xs font-satoshi-medium w-full ${
                            errors.catImg ? "border-[#f32f26]" : null
                          }`}
                          {...register("catImg", {
                            required: "Lütfen fotoğraf seçiniz.",
                          })}
                        />

                        <label
                          htmlFor="catImg"
                          className={` cursor-text peer-focus:-top-2.5 peer-focus:bg-theme-color transition-all select-none duration-300 px-1 absolute  left-6 text-xs font-satoshi-medium ${
                            watcher.catImg ? "bg-theme-color -top-2.5" : "top-4"
                          } ${
                            errors.catImg ? "text-[#f32f26]" : "text-[#919191]"
                          }`}
                        >
                          Kategori'nin Fotoğraf Linki*
                        </label>

                        {errors.catImg && (
                          <p className=" text-xs text-[#f32f26] mt-1">
                            {errors.catImg.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                      data-modal-hide="medium-modal"
                      type="button"
                      className="text-gray-500 bg-red-500 hover:bg-red-600  focus:outline-none rounded-lg text-sm font-medium px-5 py-2.5 dark:bg-red-500 dark:text-white  dark:hover:text-white dark:hover:bg-red-600"
                      onClick={() => {
                        AdminStore.setIsCategoryModalOpen();
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

export default CategoryAddForm;
