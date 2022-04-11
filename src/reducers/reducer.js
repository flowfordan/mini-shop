import { updStock } from "./updStock";
import { updShoppingCart } from "./updShoppingCart";

const reducer = (state, action) => {
    return {
        stock: updStock(state, action),
        shoppingCart: updShoppingCart(state, action)
    }
}

export default reducer;
