import React, { useRef, useState } from "react";
import styles from "../styles/AddExpense.module.css";
import MoneyInput from "@rschpdr/react-money-input";
import updateData from "../Hooks/updateData";
import { DataContext } from "../Context/DataContext";
import { useContext } from "react";
import { handleSubmit } from "../functions/handleSubmit";

const AddExpense = () => {
  const expenseName = useRef();
  const expenseType = useRef();
  const [money, setMoney] = useState(0);

  const { data } = useContext(DataContext);

  const handleChange = (e) => {
    setMoney(e.target.value);
  };

  return (
    <div className={styles.add_container}>
      <h2>Add new Expense</h2>
      <form
        onSubmit={(e) =>
          handleSubmit(
            e,
            expenseType.current.value,
            expenseName.current.value,
            money,
            data
          )
        }
        className={styles.form_container}
      >
        <label htmlFor="describe-expension">Name of Expension</label>
        <input
          type="text"
          placeholder="Describe your expense"
          id="describe-expension"
          ref={expenseName}
          autoComplete="off"
          required
        />

        <label htmlFor="expense-type">Choose Type</label>
        <select
          name="expense-type"
          id="expense-type"
          ref={expenseType}
          required
        >
          <option value="1">Food</option>
          <option value="2">Going Out</option>
          <option value="3">Other</option>
        </select>

        <label htmlFor="money">Money</label>
        <MoneyInput value={money} onChange={handleChange} />
        <input
          type="submit"
          value={`Add Expense`}
          className={styles["button-19"]}
        />
      </form>
    </div>
  );
};

export default AddExpense;
