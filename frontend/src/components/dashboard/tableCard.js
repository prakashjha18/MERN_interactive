import React from "react";
import { Table, Tag, Space } from "antd";
import { Doughnut, Pie } from "react-chartjs-2";
import { Box } from "./card.js";
import moment from "moment";


import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import Checkbox from "@material-ui/core/Checkbox";
import SortIcon from "@material-ui/icons/ArrowDownward";
import Loader from "../common/Loader";

const TableCardComponent = (props) => {
	const columns = [
		{
			name: "Flight Name",
			selector: "flightname",
			// key: "flightName",
			render: (text, row) => <span>{row.flightname}</span>,
		},
		{
			name: "Flight No",
			selector: "flightno",
			// key: "flightNo",
			render: (text, row) => <span>{row.flightno}</span>,
		},
		{
			name: "Flight Type",
			selector: "flighttype",
			// key: "flightType",
			render: (text, row) => <span>{row.flighttype}</span>,
		},
		{
			name: "From",
			selector: "from",
			// key: "isTerminal",
			render: (text, row) => <span>{row.from}</span>,
		},
		{
			name: "To",
			selector: "to",
			// key: "isTerminal",
			render: (text, row) => <span>{row.to}</span>,
		},
		{
			name: "Landing Time",
			selector: "landingtime",
			// key: "isTerminal",
			render: (text, row) => <span>{moment(row.landingtime).format("MMMM Do YYYY, h:mm:ss a")}</span>,
		},
		{
			name: "Takeoff Time",
			selector: "takeofftime",
			// key: "isTerminal",
			render: (text, row) => <span>{moment(row.takeofftime).format("MMMM Do YYYY, h:mm:ss a")}</span>,
		},
	];
	const isIndeterminate = (indeterminate) => indeterminate;
	const selectableRowsComponentProps = { indeterminate: isIndeterminate };

	// console.log("THE PROPS", props);
	// console.log("THE PROPS", props.flightData);
	return (
		<div className="px-28 w-full py-4">
			{/* {load && <Loader />} */}
			<Card>
				<DataTable
					title="Data"
					columns={columns}
					data={props.flightData}
					defaultSortField="flightno"
					sortIcon={<SortIcon />}
					pagination
					selectableRows
					selectableRowsComponent={Checkbox}
					selectableRowsComponentProps={selectableRowsComponentProps}
				/>
			</Card>
		</div>
	);
};

export default TableCardComponent;
