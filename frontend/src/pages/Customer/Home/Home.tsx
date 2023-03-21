import axios from "axios";
import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { foodStore } from "store";

const mainCategories = [
  {
    id: "1",
    cat_name: "Pizzalar",
    cat_img: "https://i.ytimg.com/vi/9FJ0sV8_O_8/maxresdefault.jpg",
  },
  {
    id: "2",
    cat_name: "Tatlılar",
    cat_img: "deserts.jpg",
  },
  {
    id: "3",
    cat_name: "İçecekler",
    cat_img: "drinks.jpg",
  },
  {
    id: "4",
    cat_name: "Kahvaltı",
    cat_img: "breakfast.jpg",
  },
  {
    id: "5",
    cat_name: "İtalyan Mutfağı",
    cat_img: "italian-kitchen.jpg",
  },
  {
    id: "6",
    cat_name: "Yemek Çeşitleri",
    cat_img: "food-types.jpg",
  },
  {
    id: "7",
    cat_name: "Izgaralar",
    cat_img: "grilled.jpg",
  },
  {
    id: "8",
    cat_name: "Salads",
    cat_img: "salads.jpg",
  },
  {
    id: "9",
    cat_name: "Wraps",
    cat_img: "wraps.jpg",
  },
];

interface IHomeProps { }
export const Home: React.FC<IHomeProps> = observer(() => {
  const { setSelectedCategory } = foodStore;

  return (
    <>
      <div className="flex flex-col max-w-xl mx-auto">
        {mainCategories.map((data, i) => (
          <Link
            to={`menu/`}
            key={data.id}
            onClick={() => {
            }}
          >
            <div
              className={`flex w-full p-12 mb-2 justify-center overflow-hidden relative bg-center bg-no-repeat`}
              style={{
                backgroundImage: `url(${data.cat_img})`,
              }}
              key={data.id}
            >
              <p className="z-[10] text-xl font-bold text-white">{data.cat_name}</p>
              <div className="opacity-40 z-[9] h-full w-full bg-black absolute top-0 left-0"></div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
});
