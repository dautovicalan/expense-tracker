import React from "react";
import GoBackButton from "../components/GoBackButton";
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

  const labels = myData.map((element) => {
    return element.title;
  });

  const datinjo = myData.map((element) => {
    return element.value;
  });

  const colors = myData.map((element) => {
    return element.color;
  });

  const finalData = {
    labels: [...labels],
    datasets: [
      {
        label: "# of Money",
        data: [...datinjo],
        backgroundColor: [...colors],
        borderColor: [...colors],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: "40%", margin: "auto", textAlign: "center" }}>
      <GoBackButton />
      <Pie data={finalData} />
    </div>
  );
};

export default ChartPage;
