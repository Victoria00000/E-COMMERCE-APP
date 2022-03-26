import { ProductsContainer } from './ProductsContainer';

export const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img src="https://cdn.pixabay.com/photo/2014/03/11/16/00/shoes-285331_960_720.jpg" className="card-img" alt="background" height='auto' />
                <div className="card-img-overlay d-flex flex-column">
                    <div className="container">
                        <h5 className="card-title display-2 fw-bolder mb-0"> ALL FEBRUARY 50%OFF!!!</h5>
                        <p className="card-text lead fs-2"> CHECK OUT ALL THE TRENDS </p>
                    </div>
                </div>
            </div>
            <ProductsContainer />
        </div>
    );
};
