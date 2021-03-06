import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const cancelEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <div className="new-expense">
        {!isEditing && (
          <button onClick={startEditingHandler}> Add New Expense</button>
        )}
        {isEditing && (
          <ExpenseForm
            onSaveExpenseData={SaveExpenseDataHandler}
            onCancel={cancelEditingHandler}
          />
        )}
      </div>
    </div>
  );
};
export default NewExpense;
