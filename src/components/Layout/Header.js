import classes from "./Header.module.css";
import mealsImage from "../../Assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
	return (
		<>
			<header className={classes.header}>
				<h1 className={classes.logo}>Food Zone</h1>
				<HeaderCartButton onClick={props.onShowCart} />
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
