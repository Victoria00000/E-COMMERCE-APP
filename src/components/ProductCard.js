import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

export const ProductCard = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProductAxios = async () => {
      setLoading(true);
      try {
        const responseProduct = await axios.get('https://fakestoreapi.com/products');
        console.log(responseProduct.data);
        setProduct(await responseProduct.data);
        setLoading(false);
      } catch (error) { console.log(error); };
    };
    getProductAxios();
  }, []);

  return (
    <>
      hola
    </>
  );
};
