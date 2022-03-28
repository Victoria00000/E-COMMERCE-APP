import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/actions/indexAction";
import { useParams } from "react-router";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export const ProductCard = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) =>{
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProductAxios = async () => {
      setLoading(true);
      try {
        const responseProduct = await axios.get(`https://fakestoreapi.com/products/${id}`);
        console.log(responseProduct.data);
        setProduct(await responseProduct.data);
        setLoading(false);
      } catch (error) { console.log(error); };
    };
    getProductAxios();
  }, [id]);

  const Loading = () => <div className="col-md-6"> LOADING...<Skeleton height={500} width={300}/></div>;
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-4 pt-5 pb-5">
          <img src={product.image} alt={product.title} height='500px' style={{maxWidth:'430px', paddingRight:'15px'}}/>
        </div>
        <div className="col-md-6 pt-5">
          <h4 className="text-uppercase text-black-50 mt-2">
            {product.category}
          </h4>
          <h1 className="display-7"> {product.title} </h1>
          <p className="lead mt-1">
            <i className="fa fa-star mx-1"></i>
            Rating {product.rating && product.rating.rate}
          </p>
          <h3 className="display-7 fw-bold my-4"> ${product.price} </h3>
          <p className="lead"> {product.description} </p>
          <button className="btn btn-outline-dark me-2" onClick={()=>addProduct(product)}> Add to cart </button>
          <NavLink to='/cart' className="btn btn-dark"> Go to cart </NavLink>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};
