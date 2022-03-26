import { useState, useEffect } from "react";
import axios from 'axios';
import Skeleton from "react-loading-skeleton";

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
        console.log(responseProducts.data);
        if (componentMounted) {
          setData(await responseProducts.data);
          setFilter(await responseProducts.data);
          setLoading(false);
        }
      } catch (error) { console.log(error); };
      return () => componentMounted = false;
    };
    getProductsAxios();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedProducts = data.filter((i) => i.category === cat);
    setFilter(updatedProducts);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}> All </button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}> Men´s Clothing </button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}> Womens´s Clothing </button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}> Jewelery </button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}> Electronic </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-2" key={product.id}>
                  <img src={product.image} className="card-img-center justify-content-center" height='350px' alt={product.title} />
                  <div className="card-body">
                    <h5 className="card-title mb-0"> {product.title.substring(0, 14)}... </h5>
                    <p className="card-text lead"> ${product.price} </p>
                    <a href="#" className="btn btn-outline-dark"> Add to cart </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder"> Latest Products </h1>
            <hr />
          </div>
          <div className="row justify-content-center">
            {loading ? <Loading /> : <ShowProducts />}
          </div>
        </div>
      </div>
    </div>
  );
};