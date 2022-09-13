import React from 'react'

import ExpenseForm from './ExpenseForm'

import './ExpenseControl.css'

export default function ExpenseControl({onAddExpenseData}) {

  const savedExpenseDataHandler = (savedExpenseData) => {
    savedExpenseData.id = Math.random().toString();
    onAddExpenseData(savedExpenseData);
  }
  return (
		<div className="new-expense ">
			<ExpenseForm onSavedExpenseData={savedExpenseDataHandler} />
		</div>
	);
}
