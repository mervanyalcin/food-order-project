export interface IFoodModel {
    id: string;
    name: string;
    categoryName: string;
    image: string;
    description: string;
    clientDescription: string;
  }
  
  // CATEGORY MODELS
  export interface ICategoryModel {
    id: string | undefined;
    name: string | undefined;
    img: string | undefined;
  }

  export interface ICreateCategoryModel {
    name: string | undefined;
    img: string | undefined;
  }

  export interface ISelectedCategoryModel {
    id: string | undefined;
    name: string | undefined;
    img: string | undefined;
  }


  // PRODUCT MODELS
  export interface IProductModel {
    id: string | undefined;
    name: string | undefined;
    img: string | undefined;
    mainCategory: string | undefined;
    description: string | undefined;
    price: string | undefined;
    createdAt: string | undefined;
  }

  export interface ICreateProductModel {
    name: string | undefined;
    img: string | undefined;
    mainCategory: string | undefined;
    description: string | undefined;
    price: string | undefined;
  }

  export interface ISelectedProductModel {
    id: string | undefined;
    name: string | undefined;
    img: string | undefined;
  }