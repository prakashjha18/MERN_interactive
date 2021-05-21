import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../common/Loader";
import Button from "../common/Button";
import { ToastContainer, toast } from "react-toastify";
import moment from "moment";

const SearchflightScreen = () => {
	const [data, setData] = useState([])
	const [keyword, setkeyword] = useState('');
	const [description, setDescription] = useState(null);
	const [email, setEmail] = useState(null);
	const [uploading, setUploading] = useState(false);
	const [bugset, setbugset] = useState(false);
	async function handleSubmit(e) {
		e.preventDefault();
		if (keyword == null) {
				toast.error("please enter a input");
		} else {
			const config = {
				headers: {
					"Content-Type": "application/json",
				},
			};
			setUploading(true);
			//const bugs = { email: "someemail@sdsd.com", domain: domain, description: description };
			//await axios.post(`/api/products/createbug`, bugs, config);
			const response = axios.get(`/api/flights?keyword=${keyword}`);
			response.then(res=>setData(res.data))
			console.log(response)
			setUploading(false);
			// setEmail("");
			// setDescription("");
			setbugset(true);
		}
	}

	useEffect(() => {
	}, [bugset]);

	return (
		<div className="h-full">
			{uploading && <Loader />}
			{bugset ? (
				<div>
					<div style={{ height: "420px" }}  className="h-full bg-gray flex flex-col wrap overflow-y-auto scroll">
						<div className=" flex  flex-wrap w-100 z-10 my-4  m-auto">
							{data.map(({ flightno, flightname, takeofftime, from , to }) => (
								<div className="max-w-sm rounded my-4 w-10/12 mx-auto bg-white  overflow-hidden shadow-lg">
									<div className="px-6 py-4">
										<div className="font-bold text-xl text-center mb-2">Flightno : {flightno}</div>
										<p className="text-gray-700 text-justify text-base">Flight Name: {flightname}</p>
										<p className="text-gray-700 text-justify text-base">Take off: {moment(takeofftime).format('MMMM Do YYYY, h:mm:ss a')}</p>
										<p className="text-gray-700 text-justify text-base">From: {from}</p>
										<p className="text-gray-700 text-justify text-base">To: {to}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div class="rounded-full border-4 border-blue-500 border-opacity-100 ">
						Thank you
					</div>
					<div className="text-center mt-6">
						<Button onClick={(e) => setbugset(false)} type="submit">
							Search more
						</Button>
					</div>
				</div>
			) : (
				<div className="w-11/12 m-auto">
					<div className="w-10/12 m-auto rounded-full flex justify-center items-center mt-4 border-4 bg-current text-white p-2 ">
						<p className="text-center">Search by Flight Name/No or location</p>
					</div>
					<br />
					{/* <div className=" border-4 p-1 border-opacity-70 border-current ">select domain : {domain}</div>
					<br />
					<div className="flex flex-wrap w-11/12">
						<div
							onClick={(e) => setDomain("Technical")}
							Style="cursor:pointer"
							className="w-55 m-1 rounded-full p-1 border-4 border-current border-opacity-70  hover:border-opacity-90 hover:bg-current hover:text-white"
						>
							Technical
						</div>
						<div
							onClick={(e) => setDomain("Misc")}
							Style="cursor:pointer"
							className="w-55 m-1 rounded-full p-1 border-4 border-current border-opacity-70  hover:border-opacity-90 hover:bg-current hover:text-white"
						>
							Misc
						</div>
						<div
							onClick={(e) => setDomain("Design")}
							Style="cursor:pointer"
							className="w-55 m-1 rounded-full p-1 border-4 border-current border-opacity-70  hover:border-opacity-90 hover:bg-current hover:text-white"
						>
							Design{" "}
						</div>
						<div
							onClick={(e) => setDomain("Development")}
							Style="cursor:pointer"
							className="w-55 m-1 rounded-full p-1 border-4 border-current border-opacity-70  hover:border-opacity-90 hover:bg-current hover:text-white"
						>
							Development
						</div>
						<div
							onClick={(e) => setDomain("General")}
							Style="cursor:pointer"
							className="w-55 m-1 rounded-full p-1 border-4 border-current border-opacity-70  hover:border-opacity-90 hover:bg-current hover:text-white"
						>
							General
						</div>
					</div> */}

					<form onSubmit={handleSubmit}>
						<input
                            value={keyword}
                            onChange={(e) => setkeyword(e.target.value)}
                            className="bg-white focus:outline-none border mt-6 block rounded-lg py-2 px-4 w-full appearance-none leading-normal"
                            name="keyword"
                            placeholder="keyword"
                            required
                        />
						<div className="text-center mt-6">
							<Button type="submit">search</Button>
						</div>
					</form>
				</div>
			)}
			<ToastContainer position="bottom-right" />
		</div>
	);
};

export default SearchflightScreen;
