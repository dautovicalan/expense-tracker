import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainPage from './pages/MainPage';
import FoodPage from './pages/FoodPage';
import useFetch from './Hooks/useFetch';
import { useState, useEffect } from "react";
import GoingOutPage from './pages/GoingOutPage';
import OtherPage from './pages/OtherPage';


function App() {
  
  const fetchedData = useFetch();

  const[data, setData] = useState(fetchedData);
  const [food, setFood] = useState(fetchedData[1]);
  const[goingOut, setGoingOut] = useState(fetchedData[2]);
  const[other, setOther] = useState(fetchedData[3]);

  


  useEffect(() => {
    setData(fetchedData);
    setFood(fetchedData[1]);
    setGoingOut(fetchedData[2]);
    setOther(fetchedData[3]);
  }, [fetchedData]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={data.length !== 0 && <MainPage data={data} />}/>
          <Route path="income" element={<p>Bok ja sam income</p>}/>
          <Route path="food" element={data.length !== 0 && <FoodPage data={food} setFood={setFood}/>}/>
          <Route path="going-out" element={data.length !== 0 && <GoingOutPage data={goingOut} setGoingOut={setGoingOut}/>}/>
          <Route path="other" element={data.length !== 0 && <OtherPage data={other} setOther={setOther}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
