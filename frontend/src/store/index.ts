import { makeAutoObservable } from "mobx";
import { ICategoryProps, IFoodProps } from "models";

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
  selectedCategory: ICategoryProps | undefined;
  setSelectedCategory = (catName: any): void => {
    this.selectedCategory = { ...catName };
  };

  /* Select Current Food */
  selectedFood: IFoodProps | undefined;
  setSelectedFood = (food: IFoodProps): void => {
    this.selectedFood = { ...food };
  };


}

export const store = new FoodStore();
