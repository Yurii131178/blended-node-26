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

const minPrice = 500;
getProductsByMinPrice(minPrice).then((result) => {
  console.log(`Products with price >= ${minPrice}:`);
  console.log(result);
});

// console.log(await getProductsByMinPrice(800));
