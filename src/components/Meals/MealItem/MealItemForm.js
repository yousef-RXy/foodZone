import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
	const amountInputRef = useRef();
	const [amountIsValid, setAmountIsValid] = useState(true);

	const submitHandler = (e) => {
		e.preventDefault();
		const enterdAmount = amountInputRef.current.value;
		const enterdAmountNum = +enterdAmount;
		if (
			enterdAmount.trim().length === 0 ||
			enterdAmountNum > 5 ||
			enterdAmountNum < 1
		) {
			setAmountIsValid(false);
			return;
		}
		setAmountIsValid(true);
		props.onSubmit(enterdAmountNum);
	};
	return (
		<form
			className={classes.form}
			onSubmit={submitHandler}
		>
			<Input
				ref={amountInputRef}
				label="Amount"
				input={{
					id: "amount_" + props.id,
					type: "Number",
					min: 1,
					max: 5,
					step: 1,
					defaultValue: 1,
				}}
			/>
			<button>+ Add</button>
			{!amountIsValid && <p>Please enter a vlid amount (1-5).</p>}
		</form>
	);
};

export default MealItemForm;
