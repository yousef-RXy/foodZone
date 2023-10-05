import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
	const [cartIsShoing, setCartIsShoing] = useState(false);

	const showCartHandler = () => {
		setCartIsShoing(true);
	};
	const closeCartHandler = () => {
		setCartIsShoing(false);
	};
	return (
		<>
			{cartIsShoing && <Cart onCloseCart={closeCartHandler} />}
			<Header onShowCart={showCartHandler} />
			<main>
				<Meals />
			</main>
		</>
	);
}

export default App;
