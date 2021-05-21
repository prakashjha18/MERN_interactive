import React, { useState, useEffect } from "react";
import Button from "../components/common/Button";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Loader from "../components/common/Loader";
import { ToastContainer, toast } from "react-toastify";

function Announcement() {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [uploading, setUploading] = useState(false);
	const userLogin = useSelector((state) => state.userLogin);
	const { loading, error, userInfo } = userLogin;
	const [admn, setAdmn] = useState(false);
	useEffect(() => {
		if (!userInfo || userInfo.isadmin == false) {
			setAdmn(true);
			console.log("not admin");
			<Redirect
				to={{
					pathname: "/",
				}}
			/>;
		}
	}, [admn]);

	async function handleSubmit(e) {
		if (name == null || description == null) {
			if (name == null) {
				toast.error("please add name");
			} else if (description == null) {
				toast.error("please add description");
			} else {
				toast.error("please select name and add description");
			}
		} else {
			e.preventDefault();
			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${userInfo.token}`,
				},
			};
			setUploading(true);
			const ann = { name: name, description: description };
			try {
				const data = await axios.post(`/api/products/announcement`, ann, config);
				console.log(data);
			} catch (error) {
				console.log(error);
			}
			setUploading(false);
			setDescription("");
			setName("");
			toast.success("Announcement Created");
		}
	}

	return (
		<div className=" w-10/12 z-10 m-auto">
			{uploading && <Loader />}
			<div className=" my-4 bg-current bg-opacity-90 hover:bg-opacity-100 flex items-center text-white h-56 mx-auto  font-bold">
				<h1 className="m-auto p-auto text-center text-6xl font-bold">
					Create Announcement
					<svg
						className="w-12 h-12 m-4 inline-block"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
						></path>
					</svg>
				</h1>
			</div>
			<form onSubmit={handleSubmit} className="lg:py-10 lg:px-40 px-4 w-9/12 m-auto py-4">
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					className="bg-white focus:outline-none border mt-6 block rounded-lg py-2 px-4 w-full appearance-none leading-normal"
					name="name"
					placeholder="name"
					required
				/>
				<textarea
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					className="bg-white focus:outline-none border mt-6 block rounded-lg py-2 px-4 w-full appearance-none leading-normal"
					name="Message"
					placeholder="description"
					type="text"
					required
				/>
				<div className="text-center mt-6">
					<Button type="submit">Report</Button>
				</div>
			</form>
			<ToastContainer position="bottom-right" />
		</div>
	);
}

export default Announcement;
