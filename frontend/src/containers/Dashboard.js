import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// Custom reusable components
import Card from "../components/dashboard/card.js";
import RatesCard from "../components/dashboard/RatesCard.js";
import StoresTrendCard from "../components/dashboard/storesTrendCard.js";
import TableCardComponent from "../components/dashboard/tableCard.js";
import Spinner from "../components/dashboard/spinner.js";

// Custom Css
import "./dashboard.scss";

function Dashboard(props) {
	console.log("DASHBOARD PROPS", props);

	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);
	const [loading, setloading] = useState(true);
	const [flight_data, setFlight_data] = useState(null);
	const [luggage_service, setluggage_service] = useState(null);
	const [cabin_service, setcabin_service] = useState(null);
	const [ramp_up_service, setramp_up_service] = useState(null);

	useEffect(() => {
		axios.get("/api/flights/")
			.then(({ data }) => {
				console.log(data);
				var lug_array = [],
					cabin_array = [],
					ramup_array = [];
				setFlight_data(data);
				for (let i = 0; i < data.length; i++) {
					lug_array.push(data[i].flightlog.luggagehandler);
					cabin_array.push(data[i].flightlog.cabinhandler);
					ramup_array.push(data[i].flightlog.rampuphandler);
				}
				console.log(lug_array, cabin_array, ramup_array);
				setluggage_service(lug_array);
				setcabin_service(cabin_array);
				setramp_up_service(ramup_array);
				setloading(false);
			});
	}, []);

	// console.log("GLOBAL REDUX", userLogin);
	// console.log("ALL THE STATE", luggage_service, cabin_service, ramp_up_service);
	return (
		<>
		  {loading ? (
		    <div
		      style={{
		        justifyContent: "center",
		        display: "flex",
		        alignItems: "center",
		        height: "80vh",
		      }}
		    >
		      <Spinner />
		    </div>
		  ) : (
		    <div
        className=""
		      id="dashboard_body"
		      style={{
		        padding: "0px",
		        height: "100%",
		        backgroundColor: "white !important",
		      }}
		    >
		      {/* <Container> */}
		      <div
		        className="pr-85 pl-5 pt-5 w-10/12 z-10 m-auto"
		        style={{ flexWrap: "wrap" }}
		      >
		        <div className="container-fluid">
		          {/* 🔴 Row Number 1 */}
		          <div className="row">
		            <Card
		              heading={"Luggage Service"}
		              value={luggage_service}
		              revenue
		            />
		            <Card
		              heading={"Cabin Crew Service"}
		              value={cabin_service}
		              store={"AM"}
		              revenue
		            />
		            <Card
		              heading={"Ramp-Up Service"}
		              value={ramp_up_service}
		              store={"EB"}
		              revenue
		            />
		          </div>
		          {/* 🔴 Row Number 2 */}
		          <div className="flex justify-between">
		            <div className="w-full">
		              <RatesCard
		                lug_ser={luggage_service}
		                cab_ser={cabin_service}
		                ramp_ser={ramp_up_service}
		              />
		            </div>
		          </div>
		          {/* 🔴 Row Number 3 */}
		          <div
		            className="row"
		            style={{
		              minHeight: "400px",
		              display: "flex",
		              justifyContent: "center",
		            }}
		          >
		            <StoresTrendCard ordersTrendStore={props.ordTrendStore} />
		          </div>
		          {/* 🔴 Row Number 4 */}
		          <div
		            className="flex w-full justify-center "
		          >
		            <TableCardComponent flightData={flight_data} />
		          </div>
		        </div>
		      </div>
		      {/* </Container> */}
		    </div>
		  )}
		</>
	);
}

export default Dashboard;
