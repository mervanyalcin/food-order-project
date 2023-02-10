import axios from "axios";
import { makeAutoObservable } from "mobx";
import { ICreateCategoryModel } from "models";

export class Admin {
  constructor() {
    makeAutoObservable(this);
  }

  /* Is Open Category Modal */
  isCategoryModalOpen: boolean = false;
  setIsCategoryModalOpen = (): void => {
    this.isCategoryModalOpen = !this.isCategoryModalOpen;
  };

  /* Is Open Product Modal */
  isProductModalOpen: boolean = false;
  setIsProductModalOpen = (): void => {
    this.isProductModalOpen = !this.isProductModalOpen;
  };

  createCategory = async ({catImg, catName}: ICreateCategoryModel): Promise<void> => {
    const requestPayload: ICreateCategoryModel = {
      catImg: catImg,
      catName: catName
    };

    try {
      const response = await axios.post("category/add", requestPayload);
      if (response.status === 200) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Finally");
    }
  };
}

export const AdminStore = new Admin();
