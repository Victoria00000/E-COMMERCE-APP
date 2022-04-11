
const cart = [];
export const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case 'ADDITEM': {
         return [
             ...state,
             product
         ]}
        case 'DELITEM': {
            return state = state.filter((x)=> x.id !== product.id)
        }
        default: return state;
    };
};