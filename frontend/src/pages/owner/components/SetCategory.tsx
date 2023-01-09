import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Admin, AdminStore } from "../store";
import axios from "axios";

interface ISetCategoryProps {
  categoryStore: Admin;
}
const SetCategory: React.FC<ISetCategoryProps> = observer(
  ({ categoryStore }) => {
    const [file, setFile] = useState<File | undefined>(undefined);
    const desc = React.useRef<HTMLInputElement>(null);
    const {createCategory} = AdminStore

    // if (file) {
    //   const data = new FormData();
    //   const fileName = Date.now() + file?.name;
    //   data.append("name", e.target.category_name.value);
    //   data.append("file", fileName);
    //   newPost.img = fileName;
    //   try {
    //     await axios.post("/upload", data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }

 

    return (
      <>
        {categoryStore.isCategoryModalOpen && (
          <div className="fixed w-full h-full bg-black/60 left-0 top-0">
            <div
              id="medium-modal"
              tabIndex={-1}
              className="fixed flex items-center justify-center z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
            >
              <div className="relative w-full h-full max-w-lg md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                      Kategori Ekle veya Düzenle
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="medium-modal"
                      onClick={() => {
                        categoryStore.setIsCategoryModalOpen();
                      }}
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>

                  {/* Modal Content */}
                  <div className="p-6 space-y-6">
                    <div>
                      <label
                        htmlFor="category_name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Kategori adı
                      </label>
                      <input
                        type="text"
                        id="category_name"
                        name="category_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Kategori adı"
                        required
                        ref={desc}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="category_img"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Kategori fotoğrafı
                      </label>
                      <input
                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="category_img"
                        name="category_img"
                        type="file"
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                          setFile(event?.target?.files?.[0]);
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                      data-modal-hide="medium-modal"
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={()=> createCategory()}
                    >
                      I accept
                    </button>

                    <button
                      data-modal-hide="medium-modal"
                      type="button"
                      className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                      onClick={() => {
                        categoryStore.setIsCategoryModalOpen();
                      }}
                    >
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
);

export default SetCategory;
