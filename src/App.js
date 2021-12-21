import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainPage from './pages/MainPage';
import FoodPage from './pages/FoodPage';
import useFetch from './Hooks/useFetch';
import { useState, useEffect, useMemo } from "react";
import GoingOutPage from './pages/GoingOutPage';
import OtherPage from './pages/OtherPage';
import { DataContext } from './Context/DataContext';
import DynamicPage from './pages/DynamicPage';


function App() {
  
  const {data: fetchedData} = useFetch('data');
  const[data, setData] = useState(fetchedData);
  const dataValue = useMemo(() => ({data, setData}),[data, setData]);

  useEffect(() => setData(fetchedData), [fetchedData]);

  return (
    <div className="App">
      <Router>
      <DataContext.Provider value={dataValue}>
        <Routes>
            <Route path="/" element={dataValue.data.length !== 0 && <MainPage />}/>
            <Route path="/info/:id" element={dataValue.data.length !== 0 && <DynamicPage/>}/>
            {/* <Route path="income" element={<p>Bok ja sam income</p>}/>
            <Route path="food" element={data.length !== 0 && <FoodPage data={food} setFood={setFood}/>}/>
            <Route path="going-out" element={data.length !== 0 && <GoingOutPage data={goingOut} setGoingOut={setGoingOut}/>}/>
            <Route path="other" element={data.length !== 0 && <OtherPage data={other} setOther={setOther}/>}/> */}
        </Routes>
      </DataContext.Provider>
      </Router>
    </div>
  );
}

export default App;
