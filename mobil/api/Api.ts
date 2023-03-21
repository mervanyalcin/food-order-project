import ApiManager from './ApiManager';

export const getAllCategory = async () => {
  try {
    const result = await ApiManager('/category/get', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: {},
    });
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getProductByCategoryName = async (catName: string) => {
  try {
    const result = await ApiManager(`/products/get/${catName}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
      data: {},
    });
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};
