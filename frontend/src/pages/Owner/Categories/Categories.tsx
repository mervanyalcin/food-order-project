import { observer } from "mobx-react-lite";
import React from "react";
import { TiPlus } from "react-icons/ti";
import CategoryAddForm from "../components/CategoryAddForm";
import { AdminStore } from "../store";
import { FaEdit } from "react-icons/fa";

interface ICategoryProps {}
export const Category: React.FC<ICategoryProps> = observer(() => {
  const [datas, setDatas] = React.useState<any>([]);

  const [open, setOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    const getDatas = async () => {
      setDatas(await AdminStore.getAllCategories());
    };
    getDatas();
  }, []);

  console.log(datas);

  return (
    <div className="">
      <div className="flex relative">
        <h1 className="mb-4 text-3xl">Kategoriler </h1>
        <div className="absolute right-0">
          <button
            className="text-sm ml-10 flex bg-green-800 text-white px-5 py-2.5 rounded-lg"
            onClick={() => {
              AdminStore.setIsCategoryModalOpen();
            }}
          >
            kategori ekle <TiPlus className=" self-center" />
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
        {datas.map((data: any) => (
          <div className="relative flex items-center shadow-md md:flex-row md:max-w-xl xs:w-full bg-gray-800 rounded-lg hover:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-900 text-white h-[240px]">
            <button className="absolute right-2  top-2" onClick={()=> {
              alert(data.id)
            }}>
              <FaEdit />
            </button>
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg xs:w-full"
              src={data.img_url}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">
                {data.cat_name}
              </h5>
            </div>
          </div>
        ))}
      </div>

      <CategoryAddForm />
    </div>
  );
});
