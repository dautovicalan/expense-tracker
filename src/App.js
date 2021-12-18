import './App.css';
import AddExpense from './components/AddExpense';
import Overview from './components/Overview';
import { useState, useEffect } from 'react';
import useFetch from './Hooks/useFetch';
import updateData from './Hooks/updateData';
import ExpenseChart from './components/ExpenseChart';

function App() {
  const data = useFetch();

  const [income, setIncome] = useState(null);
  const [food, setFood] = useState(null);
  const [goingOut, setGoingOut] = useState(null);
  const [other, setOther] = useState(null);

  useEffect(() => {
    setIncome(data[0]);
    setFood(data[1]);
    setGoingOut(data[2]);
    setOther(data[3]);
  }, [data]);
  console.log(data);

  const handleSubmit = (e, expenseName, expenseType, expenseMoney) =>{
    e.preventDefault();
    const money = expenseMoney;
    switch (expenseType.current.value) {
      case "food":
        let newFood = food.value + money;
        let foodimier = {...food, value: newFood};
        updateData(foodimier.id, foodimier);
        setFood(food => ({...food, value: newFood}));
        break;
      case "going Out":
        let newGoingOut = goingOut.value + money
        let ajvanka = ({...goingOut, value: newGoingOut});
        updateData(ajvanka.id, ajvanka);
        setGoingOut(goingOut => ({...goingOut, value: newGoingOut}));
        break;
      case "other":
        let newOther = other.value + money;
        let dajOther = ({...other, value: newOther});
        updateData(dajOther.id, dajOther);
        setOther(other => ({...other, value: newOther}));
        break;
      default:
        alert("Something went wrong");
        break;
    }
  }

  return (
    <div className="App">
      {income && food && goingOut && other && <Overview income={income.value} food={food.value} goingOut={goingOut.value} other={other.value}/>}
      {food && goingOut && other && <ExpenseChart food={food.value} goingOut={goingOut.value} other={other.value}/>}
      <AddExpense handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
