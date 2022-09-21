import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css"

export default function ExpensesList(props) {
	if (props.expenses.length === 0) {
		return <h1 className="expenses-list__fallback">No expense found</h1>;
	}

	return (
		<ul className="expenses-list">
			{props.expenses.map((exp) => {
				return (
					<ExpenseItem
						key={exp.id}
						title={exp.title}
						amount={exp.amount}
						date={exp.date}
					/>
				);
			})}
		</ul>
	);
}
