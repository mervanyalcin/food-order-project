import axios from "axios";
import { makeAutoObservable, observable, toJS } from "mobx";
import { ICreateCategoryModel } from "models";

export class Admin {
  constructor() {
    makeAutoObservable(this);
  }
  
  // Success modalın açılma durumunun kontrolü.
  isModalOpen = false
  // Success modalın başlığının kontrolü.
  successTitle = ""
  // Success modalın içeriğindeki yazının kontrolü.
  successText = ""
  // Success modalın true yada false olma durumu. (Başarılı / Başarısız işlem.)
  isSuccessOrNot = false

  /* ALL CATEGORY FUNCTIONS */
  /* Is Open Category Modal */
  isCategoryModalOpen: boolean = false;
  setIsCategoryModalOpen = (): void => {
    this.isCategoryModalOpen = !this.isCategoryModalOpen;
  };
  createCategory = async ({
    catImg,
    catName,
  }: ICreateCategoryModel): Promise<void> => {
    const requestPayload = {
      catName: catName,
      catImg: catImg,
    };
    try {
      const response = await axios.post("/category/add", requestPayload);

      if (response.status === 200) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Finally");
    }
  };

  getAllCategories = async (): Promise<void> => {
    try {
      const response = await axios.post("/category/get");
      return response.data
    } catch (error) {
      console.log(error);
    } finally {
      
    }
  };

  /* ALL PRODUCT FUNCTIONS */
  /* Is Open Product Modal */
  isProductModalOpen: boolean = false;
  setIsProductModalOpen = (): void => {
    this.isProductModalOpen = !this.isProductModalOpen;
  };
}

export const AdminStore = new Admin();
