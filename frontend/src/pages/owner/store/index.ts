import axios from "axios";
import { makeAutoObservable } from "mobx";

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

  createCategory = async (): Promise<void> => {
    const requestPayload = {
      createdBy: "xxx",
      categoryName: "xxx",
      categoryImg: "xxx.jpg",
    };
    try {
      const response = await axios.post("/category/", requestPayload);
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
