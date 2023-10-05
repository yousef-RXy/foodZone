import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
	// const cartItems = props.items.map((item) => (
	// 	<CartItem
	// 		key={item.id}
	// 		name={item.name}
	// 		price={item.price}
	// 		amount={item.amount}
	// 		onRemove=""
	// 		onAdd=""
	// 	/>
	// ));
	const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 22.99 }].map(
		(item) => (
			<CartItem
				key={item.id}
				name={item.name}
				price={item.price}
				amount={item.amount}
				onRemove=""
				onAdd=""
			/>
		)
	);

	return (
		<Modal onClose={props.onCloseCart}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>45.98</span>
			</div>
			<div className={classes.actions}>
				<button
					onClick={props.onCloseCart}
					className={classes["button--alt"]}
				>
					Close
				</button>
				<button className={classes.button}>Order</button>
			</div>
		</Modal>
	);
};

export default Cart;
