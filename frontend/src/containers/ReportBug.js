import React, { useState } from "react";
import Button from "../components/common/Button";
import axios from 'axios'
import Loader from '../components/common/Loader';
function ReportBug() {

	const [email, setEmail] = useState("");
	const [selectedFile, setSelectedFile] = useState(null);
	const [message, setMessage] = useState("");
	const [image, setImage] = useState('')
	const [uploading, setUploading] = useState(false)

	const uploadFileHandler = async (e) => {
		const file = e.target.files[0]
		const formData = new FormData()
		formData.append('image', file)
		setUploading(true)

		try {
		  const config = {
			headers: {
			  'Content-Type': 'multipart/form-data',
			},
		  }

		  const { data } = await axios.post('/api/upload', formData, config)

		  setImage(data)

		  setUploading(false)
		} catch (error) {
		  console.error(error)
		  setUploading(false)
		}
	  }

	async function handleSubmit(e){
		e.preventDefault();
		const config = {
			headers: {
			  'Content-Type': 'application/json',
			},
		  }
		setUploading(true)
		const bugs = ({"email":email,"image":image,"description":message})
		await axios.post(`/api/products/createbug`, bugs, config)
		setUploading(false);
		setEmail("");
		setMessage("");
		setImage("");
		setSelectedFile(null);
	}

	return (
		<div className=" w-10/12 z-10 m-auto">
			{uploading && <Loader />}
			<div className=" my-4 bg-current bg-opacity-90 hover:bg-opacity-100 flex items-center text-white h-56 mx-auto  font-bold">
				<h1 className="m-auto p-auto text-center text-6xl font-bold">
					Report Bug
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
							d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>
				</h1>
			</div>
			<form onSubmit={handleSubmit} className="lg:py-10 lg:px-52 px-4 m-auto py-4 ">
				<input
					value={email}
					pattern="[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+.[A-Za-z0-9.-]+"
					onChange={(e) => setEmail(e.target.value)}
					className="bg-white focus:outline-none border mt-6 block rounded-lg py-2 px-4 w-full appearance-none leading-normal"
					name="Email"
					type="email"
					placeholder="abc@gmail.com"
				/>
				<input
					value={selectedFile}
					onChange={uploadFileHandler}
					className="bg-white focus:outline-none border mt-6 block rounded-lg py-2 px-4 w-full appearance-none leading-normal"
					name="file"
					placeholder="File"
					type="file"
				/>
				<textarea
					value={message}
					onChange={(e) => setMessage(e.target.value)}
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
	);
}

export default ReportBug;
