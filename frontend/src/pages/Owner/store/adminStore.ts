import axios from "axios";
import { action, makeAutoObservable, observable, toJS } from "mobx";
import {
  ICategoryModel,
  ICreateCategoryModel,
  ICreateProductModel,
  IProductModel,
  ISelectedCategoryModel,
} from "models";

export class Admin {
  constructor() {
    makeAutoObservable(this);
  }

  // Success modalın açılma durumunun kontrolü.
  @observable isModalOpen = false;
  @action setIsModalOpen = (isWhat: boolean) => {
    this.isModalOpen = isWhat;
  };
  // Success modalın true yada false olma durumu. (Başarılı / Başarısız işlem.)
  @observable isSuccessOrNot = false;
  @action setIsSuccessOrNot = (isWhat: boolean) => {
    this.isSuccessOrNot = isWhat;
  };
  // Success modalın başlığının kontrolü.
  @observable successTitle = "";
  @action setSuccessTitle = (scsTitle: string) => {
    this.successTitle = scsTitle;
  };
  // Success modalın içeriğindeki yazının kontrolü.
  @observable successText = "";
  @action setSuccessText = (scsText: string) => {
    this.successText = scsText;
  };

  /* ALL CATEGORY FUNCTIONS */
  // GET ALL CATEGORIES
  @observable allCategories: ICategoryModel[] = [];
  @action getAllCategories = async (): Promise<void> => {
    try {
      const response = await axios.post("/api/category/get");
      if (response.status === 200) {
        AdminStore.allCategories = toJS(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  /* Is Open Create Category Modal */
  @observable isAddCategoryModalOpen: boolean = false;
  @action setIsAddCategoryModalOpen = (): void => {
    this.isAddCategoryModalOpen = !this.isAddCategoryModalOpen;
  };
  // CREATE NEW CATEGORY
  @action createCategory = async ({
    img,
    name,
  }: ICreateCategoryModel): Promise<void> => {
    const requestPayload = {
      name: name,
      img: img,
    };
    try {
      const response = await axios.post("/api/category/add", requestPayload);
      if (response.status === 200) {
        this.getAllCategories();
        this.setIsAddCategoryModalOpen();
        return response.data;
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Finally");
    }
  };

  /* Select Current Task */
  @observable selectedCategory: ISelectedCategoryModel | undefined;
  @action setSelectedCategory = (category: ISelectedCategoryModel): void => {
    this.selectedCategory = { ...category };
  };
  /* Make Form Empty */
  @action
  initializeSelectedCategory = (): void => {
    this.selectedCategory = {
      id: "0",
      name: "",
      img: "",
    };
  };
  /* Is Open Set Category Modal */
  @observable isSetCategoryModalOpen: boolean = false;
  @action setIsSetCategoryModalOpen = (): void => {
    this.isSetCategoryModalOpen = !this.isSetCategoryModalOpen;
  };
  // SET CATEGORY
  @action setCategory = async ({
    id,
    name,
    img,
  }: ICategoryModel): Promise<void> => {
    try {
      const response = await axios.post("/api/category/set", {
        id,
        img,
        name,
      });
      if (response.status === 200) {
        this.getAllCategories();
        this.setIsSetCategoryModalOpen();
        return response.data;
      }
    } catch (error) {}
  };

  // SET CATEGORY
  @action deleteCategory = async (id: string | undefined): Promise<void> => {
    try {
      const response = await axios.post("/api/category/delete", {
        id,
      });
      if (response.status === 200) {
        this.getAllCategories();
        this.setIsSetCategoryModalOpen();
        return response.data;
      }
    } catch (error) {}
  };

  /* END OF THE CATEGORY ACTIONS */

  /* ALL PRODUCTS FUNCTIONS */
  /* Is Open Product Modal */
  @observable isAddProductModalOpen: boolean = false;
  @action setIsAddProductModalOpen = (): void => {
    this.isAddProductModalOpen = !this.isAddProductModalOpen;
  };

  @observable allProducts: IProductModel[] = [];
  @action getAllProducts = async () => {
    try {
      const response = await axios.post("/api/products/get");
      AdminStore.allProducts = toJS(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  @action createProduct = async ({
    name,
    img,
    description,
    price,
    mainCategory,
  }: ICreateProductModel) => {
    try {
      const requestPayload = {
        name: name,
        img: img,
        description: description,
        price: price,
        mainCategory: mainCategory,
      }
      const response = await axios.post("/api/products/add", requestPayload);
      if(response.status === 201) {
        this.isAddProductModalOpen = false        
      }

    } catch (error) {
      console.log(error);
    }
  };
}
export const AdminStore = new Admin();
