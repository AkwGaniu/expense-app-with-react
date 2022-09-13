import React from "react";
import ExpensesFilter from "./ExpenseController/ExpensesFilter";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";


export default function Expenses({ expenses, onFilterExpenses }) {
	const handleFilterValue = (filterValue) => {
		onFilterExpenses(filterValue);
	};

	return (
		<div className="expenses">
			<ExpensesFilter onFilterValue={handleFilterValue} />
			{expenses.map((exp) => {
				return (
					<ExpenseItem
						key={exp.id}
						title={exp.title}
						amount={exp.amount}
						date={exp.date}
					/>
				);
			})}
		</div>
	);
}
