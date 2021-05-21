import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../common/Loader";
import Button from "../common/Button";
import { ToastContainer, toast } from "react-toastify";

const Bugreport = () => {
	const [domain, setDomain] = useState(null);
	const [description, setDescription] = useState(null);
	const [email, setEmail] = useState(null);
	const [uploading, setUploading] = useState(false);
	const [bugset, setbugset] = useState(false);
	async function handleSubmit(e) {
		e.preventDefault();
		if (domain == null || description == null) {
			if (domain == null) {
				toast.error("please select a domain");
			} else if (description == null) {
				toast.error("please add description");
			} else {
				toast.error("please select domain and add description");
			}
		} else {
			const config = {
				headers: {
					"Content-Type": "application/json",
				},
			};
			setUploading(true);
			const bugs = { email: "someemail@sdsd.com", domain: domain, description: description };
			await axios.post(`/api/products/createbug`, bugs, config);
			setUploading(false);
			setEmail("");
			setDescription("");
			setDomain("");
			setbugset(true);
		}
	}

	useEffect(() => {
		console.log(domain);
	}, [domain]);

	return (
		<div className="h-full">
			{uploading && <Loader />}
			{bugset ? (
				<div>
					<br />
					<br />
					<div class="rounded-full border-4 border-blue-500 border-opacity-100 ">
						Thank you for Submitting the bug we will try to get back to you
					</div>
					<div className="text-center mt-6">
						<Button onClick={(e) => setbugset(false)} type="submit">
							Submit another
						</Button>
					</div>
				</div>
			) : (
				<div className="w-11/12 m-auto">
					<div className="w-10/12 m-auto rounded-full flex justify-center items-center mt-4 border-4 bg-current text-white p-2 ">
						<p className="text-center">Hello Please report your bug</p>
					</div>
					<br />
					<div className=" border-4 p-1 border-opacity-70 border-current ">select domain : {domain}</div>
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
					</div>

					<form onSubmit={handleSubmit}>
						{/* <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white focus:outline-none border mt-6 block rounded-lg py-2 px-4 w-full appearance-none leading-normal"
            name="email"
            placeholder="email"
            required
          /> */}
						{/* <input
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="bg-white focus:outline-none border mt-6 block rounded-lg py-2 px-4 w-full appearance-none leading-normal"
            name="domain"
            placeholder="domain"
            required
          /> */}
						<textarea
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							className="bg-white focus:outline-none border mt-6 block rounded-lg py-2 px-4 w-full appearance-none leading-normal"
							name="Message"
							placeholder="Explain bug here..."
							type="text"
							required
						/>
						<div className="text-center mt-6">
							<Button type="submit">Report</Button>
						</div>
					</form>
				</div>
			)}
			<ToastContainer position="bottom-right" />
		</div>
	);
};

export default Bugreport;
