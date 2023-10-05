import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
	const [cartIsShoing, setCartIsShoing] = useState(false);

	const showCartHandler = () => {
		setCartIsShoing(true);
	};
	const closeCartHandler = () => {
		setCartIsShoing(false);
	};
	return (
		<CartProvider>
			{cartIsShoing && <Cart onCloseCart={closeCartHandler} />}
			<Header onShowCart={showCartHandler} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
