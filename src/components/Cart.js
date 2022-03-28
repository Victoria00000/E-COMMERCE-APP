import { useSelector, useDispatch } from "react-redux";
import { delCart } from '../redux/actions/indexAction';

export const Cart = () => {
    const state = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const handleClose = (item) => dispatch(delCart(item));

    const cartItems = (cartItem) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <button className="btn-close float-end" aria-label="Close" onClick={() => handleClose(cartItem)}></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.img} alt={cartItem.title} height='200px' />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className="lead fw-bold"> ${cartItem.price} </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3> Your cart is empty </h3>
                    </div>
                </div>
            </div>
        );
    };
    return (
        <>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
        </>
    );
};
