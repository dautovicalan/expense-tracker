import React from "react";
import GoBackButton from "../components/GoBackButton";
import { PieChart } from "react-minimal-pie-chart";
import { DataContext } from "../Context/DataContext";
import { useContext } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const reducer = (prevValue, currentValue) => {
  return prevValue + currentValue.value;
};

const ChartPage = () => {
  const { data } = useContext(DataContext);

  const myData = data.map((element) => {
    const value = parseInt(element.details.reduce(reducer, 0).toFixed(2));
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return { title: element.type, value: value, color: "#" + randomColor };
  });

  const finalData = {
    labels: [
      myData.map((element) => {
        return element.title;
      }),
    ],
    datasets: [
      {
        label: "# of Money",
        data: [
          myData.map((element) => {
            return element.value;
          }),
        ],
        backgroundColor: [
          myData.map((element) => {
            return element.color;
          }),
        ],
        borderColor: [
          myData.map((element) => {
            return element.color;
          }),
        ],
        borderWidth: 1,
      },
    ],
  };
  console.log(finalData);
  const testData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // ! https://github.com/reactchartjs/react-chartjs-2 PLEASE SOLVE THIS WITH CHART JS
  return (
    <div style={{ width: "20%", margin: "auto" }}>
      <GoBackButton />
      <p>Hello</p>
      <Pie data={finalData} />
    </div>
  );
};

export default ChartPage;
