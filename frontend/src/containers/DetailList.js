import React from "react";
import A320 from "../aircrafts_img/a320.png";
import Button from "../components/common/Button";

function DetailList() {
	return (
		<div className=" w-10/12 z-10 m-auto">
			<div className="m-4">
				<Button className="flex">
					<svg
						className="w-5 mr-2 h-6 inline-block"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M10 19l-7-7m0 0l7-7m-7 7h18"
						></path>
					</svg>
					Go Back
				</Button>
			</div>
			<div className=" my-4 flex justify-center h-56 mx-auto font-bold">
				<img src={A320} alt="about img" />
			</div>
			<div className=" my-2 absolute h-56 text-justify w-10/12">
				<h1 className="text-4xl text-center">Header of list.</h1>
				<br />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, minima eos. Repellat sunt,
					impedit aspernatur ab praesentium voluptates architecto aliquid! Cumque, veniam, doloribus vero
					suscipit, sed vitae iste delectus nam aspernatur commodi reprehenderit maxime? Mollitia cumque, ea
					quaerat fugit omnis incidunt quis in laboriosam similique nostrum molestias, blanditiis repellendus
					odit.
				</p>
				<br />
			</div>
		</div>
	);
}

export default DetailList;
