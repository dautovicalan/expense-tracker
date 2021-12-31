import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainPage from './pages/MainPage';
import useFetch from './Hooks/useFetch';
import { useState, useEffect, useMemo } from "react";
import { DataContext } from './Context/DataContext';
import DynamicPage from './pages/DynamicPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Navinjo from "./components/Navinjo";
import AddNewSectionPage from './pages/AddNewSectionPage';
import ChartPage from './pages/ChartPage';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';
import ShowMoneyStatusPage from './pages/ShowMoneyStatusPage';

const getUser = () => {
  return JSON.parse((localStorage.getItem("currentUser")));
}

function App() {
  
  const {data: fetchedData, isLoading} = useFetch('data');
  const[data, setData] = useState(fetchedData);
  const[isLoggedIn, setIsLoggedIn] = useState(getUser);
  const[currentCurrency, setCurrentCurrency] = useState("KN")
  const dataValue = useMemo(() => ({data, setData, isLoggedIn, setIsLoggedIn, currentCurrency, setCurrentCurrency}),[data, setData, isLoggedIn, setIsLoggedIn, currentCurrency, setCurrentCurrency]);

  useEffect(() => setData(fetchedData), [fetchedData]);

  if(isLoggedIn === null){
    return <Login setIsLoggedIn={setIsLoggedIn}/>
  } 

  return (
    <div className="App">
      {isLoggedIn && (<Router>
      <DataContext.Provider value={dataValue}>
        <Navinjo isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Routes>
            <Route path="/" element={!isLoading && <MainPage />}/>
            <Route path="/info/:id" element={!isLoading && <DynamicPage/>}/>
            <Route path="/add-new-section" element={<AddNewSectionPage/>}/>
            <Route path="/chart" element={<ChartPage/>}/>
            <Route path="/money-status" element={<ShowMoneyStatusPage/>}/>
        </Routes>
      </DataContext.Provider>
      </Router>)}
    </div>
  );
}

export default App;
