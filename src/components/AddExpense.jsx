import React, { useRef, useState } from "react";
import styles from "../styles/AddExpense.module.css";
import MoneyInput from "@rschpdr/react-money-input";

const AddExpense = ({ handleSubmit }) => {
  const expenseName = useRef();
  const expenseType = useRef();
  const [money, setMoney] = useState(0);

  const handleChange = (e) => {
    setMoney(e.target.value);
  };

  return (
    <div className={styles.add_container}>
      <h2>Add new Expense</h2>
      <form onSubmit={(e) => handleSubmit(e, expenseName, expenseType, money)}>
        <label htmlFor="describe-expension">Name of Expension</label>
        <input
          type="text"
          placeholder="Describe your expense"
          id="describe-expension"
          ref={expenseName}
        />
        <div>
          <label htmlFor="expense-type">Choose Type</label>
          <select name="expense-type" id="expense-type" ref={expenseType}>
            <option value="food">Food</option>
            <option value="going Out">Going out</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="money-input">
          <label htmlFor="money">Money</label>
          <MoneyInput value={money} onChange={handleChange} />
        </div>
        <input type="submit" value={`Add Expense`} />
      </form>
    </div>
  );
};

export default AddExpense;
