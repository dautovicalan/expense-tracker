import React from "react";
import GoBackButton from "../components/GoBackButton";
import { PieChart } from "react-minimal-pie-chart";
import { DataContext } from "../Context/DataContext";
import { useContext } from "react";

const reducer = (prevValue, currentValue) => {
  return prevValue + currentValue.value;
};

const ChartPage = () => {
  const { data } = useContext(DataContext);

  const myData = data.map((element) => {
    const value = parseInt(element.details.reduce(reducer, 0).toFixed(2));
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    console.log(value);
    return { title: element.type, value: value, color: "#" + randomColor };
  });

  // ! https://github.com/reactchartjs/react-chartjs-2 PLEASE SOLVE THIS WITH CHART JS
  return (
    <div style={{ width: "20%", margin: "auto" }}>
      <GoBackButton />
      <p>Hello</p>
      <PieChart
        data={myData}
        label={({ dataEntry }) => dataEntry.title}
        animate={true}
      />
    </div>
  );
};

export default ChartPage;
