import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const ExpenseChart = ({ food, goingOut, other }) => {
  return (
    <div className="chart-container" style={{ width: "25%", margin: "auto" }}>
      <PieChart
        data={[
          { title: "Food", value: food, color: "#32a852" },
          { title: "Going out", value: goingOut, color: "#2212cc" },
          { title: "Other", value: other, color: "#ccc312" },
        ]}
        label={({ dataEntry }) => dataEntry.title}
        animate={true}
      />
    </div>
  );
};

export default ExpenseChart;
