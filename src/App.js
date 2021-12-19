import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainPage from './pages/MainPage';
import FoodPage from './pages/FoodPage';
import useFetch from './Hooks/useFetch';
import { useState, useEffect } from "react";
import updateData from "./Hooks/updateData";

function App() {
  
  const fetchedData = useFetch();

  const[data, setData] = useState(fetchedData);

  useEffect(() => {
    setData(fetchedData);
  }, [fetchedData]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={data.length !== 0 && <MainPage data={data}/>}/>
          <Route path="income" element={<p>Bok ja sam income</p>}/>
          <Route path="food" element={data.length !== 0 && <FoodPage data={data[1]}/>}/>
          <Route path="going-out" element={<p>Bok ja sam goind oiut</p>}/>
          <Route path="other" element={<p>Bok ja sam other</p>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
