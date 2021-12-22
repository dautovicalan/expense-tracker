import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainPage from './pages/MainPage';
import useFetch from './Hooks/useFetch';
import { useState, useEffect, useMemo } from "react";
import { DataContext } from './Context/DataContext';
import DynamicPage from './pages/DynamicPage';


function App() {
  
  const {data: fetchedData, isLoading} = useFetch('data');
  const[data, setData] = useState(fetchedData);
  const dataValue = useMemo(() => ({data, setData}),[data, setData]);

  useEffect(() => setData(fetchedData), [fetchedData]);

  console.log(dataValue.data);

  return (
    <div className="App">
      <Router>
      <DataContext.Provider value={dataValue}>
        <Routes>
            <Route path="/" element={!isLoading && <MainPage />}/>
            <Route path="/info/:id" element={!isLoading && <DynamicPage/>}/>
        </Routes>
      </DataContext.Provider>
      </Router>
    </div>
  );
}

export default App;
