import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainPage from './pages/MainPage';
import FoodPage from './pages/FoodPage';
import useFetch from './Hooks/useFetch';
import { useState, useEffect } from "react";
import updateData from "./Hooks/updateData";
import GoingOutPage from './pages/GoingOutPage';

function App() {
  
  const fetchedData = useFetch();

  const[data, setData] = useState(fetchedData);
  const [food, setFood] = useState(fetchedData[1]);
  const[goingOut, setGoingOut] = useState(fetchedData[2]);


  useEffect(() => {
    setData(fetchedData);
    setFood(fetchedData[1]);
    setGoingOut(fetchedData[2]);
  }, [fetchedData]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={data.length !== 0 && <MainPage data={data} food={food} setFood={setFood}/>}/>
          <Route path="income" element={<p>Bok ja sam income</p>}/>
          <Route path="food" element={data.length !== 0 && <FoodPage data={food} setFood={setFood}/>}/>
          <Route path="going-out" element={data.length !== 0 && <GoingOutPage data={goingOut} setGoingOut={setGoingOut}/>}/>
          <Route path="other" element={<p>Bok ja sam other</p>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
