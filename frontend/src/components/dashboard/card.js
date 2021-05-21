import React from "react";
import moment from "moment";
import { Doughnut, Pie, Bar } from "react-chartjs-2";
const data = {
  // labels: ["January", "February", "March", "April", "May", "June", "July"],
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
export const Box = (props) => {
  console.log("THE PROPS", props);
  return (
    <div id="box-div" style={{ width: "100%", height: "100%", margin: "1em" }}>
      <div className="bg-gray-50 box-border shadow-md rounded p-10 h-auto md:h-72 grid grid-cols-3 gap-4 auto-rows-min">
        {/* <h2 className="col-span-3">Social</h2> */}
        <Doughnut
          data={{
            labels: props.labels, //["Online", "Offline", "Connected"],
            datasets: [
              {
                label: "Number of Flights",
                // backgroundColor: "rgba(255,99,132,0.2)",
                // borderColor: "rgba(255,99,132,1)",
                backgroundColor: [
                  "#f47a60",
                  "#316879",
                  "rgba(127, 231, 220, 1)",
                  "#4d5198",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                ],
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: props.data,
              },
            ],
          }}
          height={200}
          width={200}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            title: {
              text: "Delay Caused By Luggage Service",
              display: true,
            },
          }}
        />
        {/* {props.component} */}
      </div>
    </div>
  );
};

function msToHMS(ms) {
  // 1- Convert to seconds:
  const hours = Math.floor((ms / 1000 / 3600) % 24);
  return hours;
}

const card = (props) => {
  // console.log("ALL THE PROPS", props.value);
  let actualEndTime = [],
    expectedendtime = [],
    date_diff_arr = [];
  // function calculateDateDiff() {
  for (let i = 0; i < props.value.length; i++) {
    let date1, date2;
    // console.log(props.value[i].actualEndTime);
    if (props.value[i].actualendtime !== undefined) {
      date1 = new Date(props.value[i].actualendtime);
      // console.log("date1", date1);
    } else {
      // console.log("I RAN");
      date1 = 0;
    }
    //push the individual actual-end-time
    actualEndTime.push(date1);
    if (props.value[i].expectedendtime !== undefined) {
      expectedendtime.push(props.value[i].expectedendtime);
      date2 = new Date(props.value[i].expectedendtime);
    } else date2 = 0;
    //push the individual expected-end-time
    actualEndTime.push(date2);
    // finding the difference
    let final_date = Math.abs(date2 - date1);
    date_diff_arr.push(final_date);
  }

  return (
    <div className="col-lg-4 col-sm-6 is-light-text my-2">
      <div className="card bg-gray-50 p-2 box-border shadow-md rounded">
        <div className="card-heading">
          <div className="is-dark-text-light letter-spacing text-lg font-bold">
            {props.heading}
          </div>
        </div>

        <div className="card-value pt-4 ">
          <span className="text-lg  pr-1 text-x-large">
            {msToHMS(date_diff_arr.reduce((a, b) => a + b, 0))} hrs
          </span>
        </div>
      </div>
    </div>
  );
};

export default card;
