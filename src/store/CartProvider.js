import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === "ADD") {
		const updateItems = state.items.concat(action.item);
		const updateTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;
		return {
			items: updateItems,
			totalAmount: updateTotalAmount,
		};
	}
	if (action.type === "REMOVE") {
	}
	return defaultCartState;
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);
	const addItemToCartHandler = (item) => {
		dispatchCartAction({ type: "ADD", item: item });
	};

	const removeItemToCartHandler = (id) => {
		dispatchCartAction({ type: "REMOVE", id: id });
	};
	const cartContext = {
		items: [],
		totalAmount: 0,
		addItem: addItemToCartHandler,
		removeItem: removeItemToCartHandler,
	};
	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
