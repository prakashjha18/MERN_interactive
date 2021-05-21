import React from "react";
import { Pie } from "react-chartjs-2";
const data = {
  labels: ["Actual-Time", "Delayed-Time", "Expected-Start", "Expected-End"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5],
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
      borderWidth: 2,
    },
  ],
};
function msToHMS(ms) {
  // 1- Convert to seconds:
  const hours = Math.floor((ms / 1000 / 3600) % 24);
  return hours;
}
const ratesCard = (props) => {
  console.log("THE props", props);
  console.log("THE LUGG", converter(props.lug_ser));
  return (
		<div className="is-light-text w-full mb-4">
			<div className=" bg-gray-50 box-border w-full shadow-md rounded">
				<div className="flex justify-between w-full">
					{/* 🔴Column-1 */}
					<div className="col-sm-4 full height">
						<Pie
							data={converter(props.lug_ser)}
							height={300}
							width={300}
							options={{
								responsive: true,
								maintainAspectRatio: false,
								title: {
									text: "Delay Caused By Luggage Service",
									display: true,
								},
							}}
						/>
					</div>
					{/* 🔴Column-1 */}
					<div className="col-sm-4 full-height border-left border-right">
						<Pie
							data={converter(props.cab_ser)}
							height={300}
							width={300}
							options={{
								responsive: true,
								maintainAspectRatio: false,
								title: {
									text: "Delay Caused By Luggage Service",
									display: true,
								},
							}}
						/>
					</div>
					{/* 🔴Column-1 */}
					<div className="col-sm-4 full-height">
						<Pie
							data={converter(props.ramp_ser)}
							height={300}
							width={300}
							options={{
								responsive: true,
								maintainAspectRatio: false,
								title: {
									text: "Delay Caused By Luggage Service",
									display: true,
								},
							}}
						/>
					</div>
				</div>
			</div>
		</div>
  );
};

export default ratesCard;

function converter(arr) {
  console.log("THE VALUES", arr);
  let arr_actualStartTime = [],
    arr_expectedStartTime = [],
    arr_actualEndTime = [],
    arr_expectedendtime = [],
    date_diff_arr = [];
  // function calculateDateDiff() {
  for (let i = 0; i < arr.length; i++) {
    let date1, date2, date3, date4;
    //📌 Actual-End-Time
    if (arr[i].actualendtime !== undefined) {
      date1 = new Date(arr[i].actualendtime);
      date1 = date1.getTime();
    } else {
      date1 = 0;
    }
    //push the individual actual-end-time
    arr_actualEndTime.push(date1);
    //📌 Expected-End-Time
    if (arr[i].expectedendtime !== undefined) {
      date2 = new Date(arr[i].expectedendtime);
      date2 = date2.getTime();
    } else date2 = 0;
    //push the individual expected-end-time
    arr_expectedendtime.push(date2);
    //📌 Actual-Start-Time
    if (arr[i].actualstarttime !== undefined) {
      date3 = new Date(arr[i].actualstarttime);
      date3 = date3.getTime();
    } else date3 = 0;
    arr_actualStartTime.push(date3);
    //📌 Expected-Start-Time
    if (arr[i].expectedstarttime !== undefined) {
      date4 = new Date(arr[i].expectedstarttime);
      date4 = date4.getTime();
    } else date4 = 0;
    arr_expectedStartTime.push(date4);
    // finding the difference
    console.log(
      "👉👉👉👉👉👉",
      arr_actualStartTime,
      arr_expectedStartTime,
      arr_actualEndTime,
      arr_expectedendtime
    );
    let final_date = Math.abs(date2 - date1);
    date_diff_arr.push(final_date);
  }
  //delayed value
  let sum_actual_end_time = arr_actualEndTime.reduce((a, b) => a + b, 0);
  let sum_expect_end_time = arr_expectedendtime.reduce((a, b) => a + b, 0);
  let sum_of_actualStartTime = arr_actualStartTime.reduce((a, b) => a + b, 0);
  let sum_of_expectedStartTime = arr_expectedStartTime.reduce(
    (a, b) => a + b,
    0
  );
  console.log(
    "SUM👉👉👉👉👉👉",
    sum_actual_end_time,
    sum_expect_end_time,
    sum_of_actualStartTime,
    sum_of_expectedStartTime
  );
  // to run the object
  let return_value = {
    labels: [
      "Actual-Start-Time",
      "Actual-End-Time",
      "Expected-Start",
      "Expected-End",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [
          msToHMS(sum_of_actualStartTime),
          msToHMS(sum_actual_end_time),
          msToHMS(sum_of_expectedStartTime),
          msToHMS(sum_expect_end_time),
        ],
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
        borderWidth: 2,
      },
    ],
  };
  return return_value;
}
