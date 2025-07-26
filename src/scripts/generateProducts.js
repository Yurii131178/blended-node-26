import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

const generateProducts = async (number) => {
  try {
    const currentProducts = await readProducts();
    const newProducts = Array.from({ length: number }, createFakeProduct);
    const updatedProducts = [...currentProducts, ...newProducts];
    await writeProducts(updatedProducts);
  } catch (error) {
    console.error('Products` generation error', error);
  }
};

generateProducts(7);
