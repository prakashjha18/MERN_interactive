import React from "react";
import A330 from "../aircrafts_img/a330.png";
import A220 from "../aircrafts_img/a220.png";
import A320 from "../aircrafts_img/a320.png";
import A350 from "../aircrafts_img/a350.png";
import A380 from "../aircrafts_img/a380.png";

function Safety() {
	return (
		<div className=" w-10/12 z-10 m-auto">
			<div className=" my-4 bg-current bg-opacity-90 hover:bg-opacity-100 flex items-center text-white h-56 mx-auto  font-bold">
				<h1 className="m-auto p-auto text-center text-6xl font-bold">Commercial Aircrafts</h1>
			</div>
			<div className=" flex  flex-wrap z-10 my-4  m-auto  p-4">
				<div className="max-w-sm w-2/12 bg-current bg-opacity-90 hover:bg-opacity-100 text-white rounded mx-4 my-4 overflow-hidden shadow-lg">
					<img className="w-full" src={A220} alt="Sunset in the mountains" />
					<div className="font-bold text-center text-xl mb-2">A220 Family</div>
				</div>
				<div className="max-w-sm w-2/12 bg-current bg-opacity-90 hover:bg-opacity-100 text-white rounded mx-4 my-4 overflow-hidden shadow-lg">
					<img className="w-full" src={A320} alt="Sunset in the mountains" />
					<div className="font-bold text-center text-xl mb-2">A320 Family</div>
				</div>
				<div className="max-w-sm w-2/12 bg-current bg-opacity-90 hover:bg-opacity-100 text-white rounded mx-4 my-4 overflow-hidden shadow-lg">
					<img className="w-full" src={A330} alt="Sunset in the mountains" />
					<div className="font-bold text-center text-xl mb-2">A330 Family</div>
				</div>
				<div className="max-w-sm w-2/12 bg-current bg-opacity-90 hover:bg-opacity-100 text-white rounded mx-4 my-4 overflow-hidden shadow-lg">
					<img className="w-full" src={A350} alt="Sunset in the mountains" />
					<div className="font-bold text-center text-xl mb-2">A350 Family</div>
				</div>
				<div className="max-w-sm w-2/12 bg-current bg-opacity-90 hover:bg-opacity-100 text-white rounded mx-4 my-4 overflow-hidden shadow-lg">
					<img className="w-full" src={A380} alt="Sunset in the mountains" />
					<div className="font-bold text-center text-xl mb-2">A380 Family</div>
				</div>
			</div>
			<div className=" my-2 text-justify  text-white text-lg p-4">
				<p>
					Airbus’ diverse product line includes everything from passenger jetliners to freighters and private
					jets. With each of the company’s aircraft family boasting cutting-edge design, superior comfort and
					unparalleled efficiency, they are setting the standard for the modern aviation industry.
				</p>
				<br />
				<p className="">
					No matter who is flying, whether it is VIPs or government officials, frequent-flying business
					passengers or vacationers jetting off for a well-deserved break, passengers can relax knowing that
					every aspect of an Airbus aircraft has been designed to be as comfortable, efficient and innovative
					as possible – creating pleasant environments for passengers, pilots and crew.
				</p>
				<br />
				<p className="">
					Ranging in size from 100-seat jetliners to the double-deck A380 that is capable of transporting more
					than 850 passengers, the total versatility of Airbus’ product line allows it to offer a variety of
					tailored solutions to meet the needs of any airline and their market – from low-cost and
					full-service carriers to the air freight and VIP transport segments – while continuously ensuring
					the very best in efficiency and experience.
				</p>
				<br />
			</div>
		</div>
	);
}

export default Safety;
