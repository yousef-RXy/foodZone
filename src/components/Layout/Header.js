import classes from "./Header.module.css";
import mealsImage from "../../Assets/meals.jpg";
const Header = (props) => {
	return (
		<>
			<header className={classes.header}>
				<h1>Food Zone</h1>
				<button>Cart</button>
			</header>
			<div className={classes["main-image"]}>
				<img
					src={mealsImage}
					alt="mealsImage"
				/>
			</div>
		</>
	);
};

export default Header;
