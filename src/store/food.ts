import { makeAutoObservable } from "mobx";
import { ICategoryModel, IFoodModel } from "models";

export class FoodStore {
  constructor() {
    makeAutoObservable(this);
  }

  /* Make Form Empty */
  initializeSelectedFood = (): void => {
    this.selectedFood = {
      id: "",
      name: "",
      categoryName: "",
      image: "",
      description: "",
      clientDescription: ""
    };
  };

  /* Select Current Main Category of Food */
  selectedCategory: ICategoryModel | undefined;
  setSelectedCategory = (catName: any): void => {
    this.selectedCategory = { ...catName };
  };

  /* Select Current Food */
  selectedFood: IFoodModel | undefined;
  setSelectedFood = (food: IFoodModel): void => {
    this.selectedFood = { ...food };
  };


}

export const foodStore = new FoodStore();
