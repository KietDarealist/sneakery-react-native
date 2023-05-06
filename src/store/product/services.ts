import axios from 'axios';

const getNikeProductsService = async () => {
  try {
    const response = await axios.get(
      `https://sneakery.herokuapp.com/api/products?brand=nike`,
    );
    if (response) return response;
  } catch (error: any) {
    return error;
  }
};

const getAdidasProductsService = async () => {
  try {
    const response = await axios.get(
      `https://sneakery.herokuapp.com/api/products?brand=adidas`,
    );
    if (response) return response;
  } catch (error: any) {
    return error;
  }
};

const getPumaProductsService = async () => {
  try {
    const response = await axios.get(
      `https://sneakery.herokuapp.com/api/products?&brand=puma`,
    );
    if (response) return response;
  } catch (error: any) {
    return error;
  }
};

const getLVProductsService = async () => {
  try {
    const response = await axios.get(
      `https://sneakery.herokuapp.com/api/products?&brand=lv`,
    );
    if (response) return response;
  } catch (error: any) {
    return error;
  }
};

const getProductDetailService = async (id: string) => {
  try {
    const response = await axios.get(
      `https://sneakery.herokuapp.com/api/products/${id}`,
    );
    if (response) return response;
  } catch (error: any) {
    return error;
  }
};

export {
  getNikeProductsService,
  getAdidasProductsService,
  getLVProductsService,
  getPumaProductsService,
  getProductDetailService,
};
