import { useState } from "react";
import { NavLink } from "react-router-dom";

export const ShowProducts = ({ data }) => {
    const [filter, setFilter] = useState(data);
    const filterProduct = (cat) => {
        console.log(data)
        const updatedProducts = data.filter((i) => i.category === cat);
        setFilter(updatedProducts);
    };

    return (
        <>
            <div className="buttons d-flex justify-content-center mb-5 pb-5">
                <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}> All </button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}> Men's Clothing </button>
                <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}> Womens's Clothing </button>
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
                                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark"> Details </NavLink>
                                </div>
                            </div>
                        </div>
                    </>
                );
            })}
        </>
    );
};