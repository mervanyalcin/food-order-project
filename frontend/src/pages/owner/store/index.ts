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

  createCategory = async (fileName: any, catName: string): Promise<void> => {
    const requestPayload: any = {
      createdBy: "Admin",
      categoryName: catName,
      categoryImg: fileName
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/category/add/",
        requestPayload
      );
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
