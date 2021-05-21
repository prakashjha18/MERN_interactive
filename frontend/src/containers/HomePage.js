import React, { useState } from "react";
import Aircraft from "../products/Aircrafts.png";
import Helicopters from "../products/Helicopter.png";
import space from "../products/space.png";
import Defence from "../products/Defence.png";

const HomePage = () => {
	return (
		<div style={{ height: "93vh" }} className="max-h-screen px-24 py-12 " id="homepage">
			<div className="text-lg flex justify-center my-8  text-white w-9/12 mx-auto">
				<span
					style={{ fontSize: "140px" }}
					className=" flex m-2 justify-center text-justify mt-8 text-current "
				>
					A
				</span>
				<p>
					irbus is an international reference in the aerospace sector. We design, manufacture and deliver
					industry-leading commercial aircraft, helicopters, military transports, satellites and launch
					vehicles, as well as providing data services, navigation, secure communications, urban mobility and
					other solutions for customers on a global scale. With a forward-looking strategy based on
					cutting-edge technologies, digital and scientific excellence, we aim for a better-connected, safer
					and more prosperous world.
				</p>
			</div>
			<div className="border-t-2 border-white ">
				<div className=" flex m-0 p-0 ">
					<h1 className="text-white text-lg border-t-4 m-0 p-0 border-white">our products and services</h1>
				</div>
				<div className=" flex w-11/12 justify-between flex-wrap z-10 my-4  m-auto  p-4">
					<div className="max-w-sm w-2/12 bg-current bg-opacity-90 hover:bg-opacity-100 text-white rounded mx-4 my-4 overflow-hidden shadow-lg">
						<img className="w-full" src={Aircraft} alt="Sunset in the mountains" />
						<div className="font-bold text-center text-xl mb-2">Commercial Aircraft</div>
					</div>
					<div className="max-w-sm w-2/12 bg-current bg-opacity-90 hover:bg-opacity-100 text-white rounded mx-4 my-4 overflow-hidden shadow-lg">
						<img className="w-full" src={Helicopters} alt="Sunset in the mountains" />
						<div className="font-bold text-center text-xl mb-2">Helicopters</div>
					</div>
					<div className="max-w-sm w-2/12 bg-current bg-opacity-90 hover:bg-opacity-100 text-white rounded mx-4 my-4 overflow-hidden shadow-lg">
						<img className="w-full" src={space} alt="Sunset in the mountains" />
						<div className="font-bold text-center text-xl mb-2">Space</div>
					</div>
					<div className="max-w-sm w-2/12 bg-current bg-opacity-90 hover:bg-opacity-100 text-white rounded mx-4 my-4 overflow-hidden shadow-lg">
						<img className="w-full" src={Defence} alt="Sunset in the mountains" />
						<div className="font-bold text-center text-xl mb-2">Defence</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
