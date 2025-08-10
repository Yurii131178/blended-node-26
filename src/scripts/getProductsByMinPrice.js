import { readProducts } from '../utils/readProducts.js';

const getProductsByMinPrice = async (minPrice) => {
  try {
    const currentProducts = await readProducts();

    const filtered = currentProducts.filter(
      (currentProducts) => Number(currentProducts.price) >= minPrice,
    );
    return filtered;
  } catch (error) {
    console.error('Error getting products by price:', error.message);
    return [];
  }
};

const minPrice = 300; // return products with price equal to 900 or higher
getProductsByMinPrice(minPrice).then((result) => {
  console.log(`Products with price >= ${minPrice}:`);
  console.log(result);
});
