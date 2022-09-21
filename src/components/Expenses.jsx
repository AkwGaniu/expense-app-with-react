import React, { useState } from "react";
import ExpensesFilter from "./ExpenseController/ExpensesFilter";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";
import ExpensesChart from "./ExpenseController/ExpensesChart";

export default function Expenses({ expenses }) {
	const [selectedYear, setSelectedYear] = useState("2022");

	const filteredExpenses = expenses.filter((exp) => {
		return exp.date.getFullYear().toString() === selectedYear.toString();
	});

	const handleFilterValue = (filterValue) => {
		setSelectedYear(filterValue);
	};

	return (
		<div className="expenses">
			<ExpensesFilter
				selectedYear={selectedYear}
				onFilterValue={handleFilterValue}
			/>
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList expenses={filteredExpenses} />
		</div>
	);
}
