import { action, makeAutoObservable, observable } from "mobx";
import { ICategoryModel, IFoodModel } from "models";

export class FoodStore {
  constructor() {
    makeAutoObservable(this);
  }

  /* Make Form Empty */
  @action initializeSelectedFood = (): void => {
    this.selectedFood = {
      id: "",
      name: "",
      categoryName: "",
      image: "",
      description: "",
      clientDescription: "",
    };
  };

  /* Select Current Main Category of Food */
  @observable selectedCategory: ICategoryModel | undefined;
  @action setSelectedCategory = (cat_name: ICategoryModel): void => {
    this.selectedCategory = { ...cat_name };
  };

  /* Select Current Food */
  @observable selectedFood: IFoodModel | undefined;
  @action setSelectedFood = (food: IFoodModel): void => {
    this.selectedFood = { ...food };
  };
}

export const foodStore = new FoodStore();
