import { useState, useEffect } from "react";
import  axios from 'axios';

export const ProductsContainer = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProductsAxios = async () => {
      setLoading(true);
      try {
        const responseProducts = await axios.get('https://fakestoreapi.com/products');
        console.log(responseProducts);
      } catch (error) { console.log(error); };
    };
    getProductsAxios();
  }, []);

  return (
    <div>ProductsContainer</div>
  );
};