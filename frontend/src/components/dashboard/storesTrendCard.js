import React from "react";
import { Doughnut, Pie, Bar } from "react-chartjs-2";
import { Box } from "./card.js";
const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Number of Flights",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const storesTrendCard = (props) => {
  return (
    <>
      {/* <div className="col-lg-6 mb-4">
        <div className="card bg-gray-50 box-border shadow-md rounded">
          <div className="chart-container large full-height">
            <Bar
              data={data}
              width={80}
              height={100}
              options={{
                indexAxis: "y",
                // Elements options apply to all of the options unless overridden in a dataset
                // In this case, we are setting the border of each horizontal bar to be 2px wide
                elements: {
                  bar: {
                    borderWidth: 2,
                  },
                },
                responsive: true,
                plugins: {
                  legend: {
                    position: "right",
                  },
                  title: {
                    display: true,
                    text: "Flight Frequency per month",
                  },
                },
              }}
            />
          </div>
        </div>
      </div> */}
      {/* Column-2 */}
      <div className="mb-4">
        <div
          className="flex w-full p-0 m-0"
          style={{
            // minHeight: "400px",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Box
            labels={["Online", "Offline", "Connected"]}
            data={[35, 98, 47]}
          />
          <Box labels={["Delayed", "On-Time", "Early"]} data={[29, 48, 68]} />
          <Box
            labels={["In Bound", "Out Bound", "Terminal"]}
            data={[55, 76, 88]}
          />
          {/* <Box /> */}
          {/* <Box /> */}
        </div>
      </div>
    </>
  );
};

export default storesTrendCard;
