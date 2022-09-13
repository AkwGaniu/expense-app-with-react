import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";


import "./ExpenseItem.css";

const ExpenseItem = ({ title, amount, date }) => {

	const [newTitle, setNewTitle] = useState(title);

	const clickHandler = () => {
		setNewTitle("Some new title")
	}

	return (
		<div className="expense-item">
			<ExpenseDate date={date} />
			<div className="expense-item__description">
				<h2>{newTitle}</h2>
				<div className="expense-item__price">${amount}</div>
			</div>
			<button onClick={clickHandler}>Change Title</button>
		</div>
	);
};

export default ExpenseItem;
