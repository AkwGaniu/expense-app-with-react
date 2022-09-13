import React, { useState } from "react";

import "./ExpenseForm.css";

export default function ExpenseForm({onSavedExpenseData}) {
	// const [changedTitle, setChangedTitle] = useState("");
	// const [changedPrice, setChangedPrice] = useState("");
	// const [changedDate, setChangedDate] = useState('');

	const [userInput, setUserInput] = useState({
		enteredTitle: "",
		enteredAmount: "",
		enteredDate: "",
  });
  
  const {
    enteredTitle: title,
    enteredAmount: amount,
    enteredDate: date,
  } = userInput;

	const titleChangeHandler = (event) => {
		// setChangedTitle(event.target.value);
		setUserInput((prevState) => {
			return {
				...prevState,
				enteredTitle: event.target.value,
			};
		});
	};

	const amountChangeHandler = (event) => {
		// setChangedPrice(event.target.value);
		setUserInput((prevState) => {
			return {
				...prevState,
				enteredAmount: event.target.value,
			};
		});
	};

	const dateChangeHandler = (event) => {
		// setChangedDate(event.target.value);
		setUserInput((prevState) => {
			return {
				...prevState,
				enteredDate: event.target.value,
			};
		});
  };
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSavedExpenseData({
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
		});
    setUserInput({
			enteredTitle: "",
			enteredAmount: "",
			enteredDate: "",
		});
  }

	return (
		<form onSubmit={handleFormSubmit}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" value={title} onChange={titleChangeHandler} />
				</div>

				<div className="new-expense__control">
					<label>Price</label>
					<input
						type="number"
						min="0.01"
            step="0.01"
            value={amount}
						onChange={amountChangeHandler}
					/>
				</div>

				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2021-1-1"
            max="2022-1-2"
            value={date}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>

			<div className="new-expense__actions">
				<button type="submit">Submit Expense</button>
			</div>
		</form>
	);
}
