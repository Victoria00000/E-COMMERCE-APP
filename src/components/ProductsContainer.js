import { useState, useEffect } from "react";
import axios from 'axios';
import { Loading } from './LoadingSkeleton';
import { ShowProducts } from './ShowProducts';

export const ProductsContainer = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProductsAxios = async () => {
      setLoading(true);
      try {
        const responseProducts = await axios.get('https://fakestoreapi.com/products');
        console.log(responseProducts.data);
        setData(await responseProducts.data);
        setFilter(await responseProducts.data);
        setLoading(false);
      } catch (error) { console.log(error); };
    };
    getProductsAxios();
  }, []);

  return (
    <div>
      <div className="container my-5 py-5" style={{boxSizing:'content-box'}}>
        <div className="">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder"> Buy now: </h1>
            <hr />
          </div>
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts data={data} filter={filter} />}
          </div>
        </div>
      </div>
    </div>
  );
};