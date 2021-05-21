import React, { useState } from "react";

function About() {

	return (
		<div className=" w-10/12 z-10 m-auto">
			<div className=" my-4 bg-current bg-opacity-90 hover:bg-opacity-100 flex items-center text-white h-56 mx-auto font-bold">
				<h1 className="m-auto p-auto text-center text-6xl font-bold">About Us</h1>
			</div>
			<div className=" my-2 text-lg p-4 text-justify text-white ">
				<h1 className="text-4xl text-center">We Make It Fly.</h1>
				<br />
				<p>
					At Airbus, how we work is just as important as what we produce. We are guided by a set of six
					values, each chosen by the very people who embody them. Customer focus, integrity, respect,
					creativity, reliability and teamwork. These values shape the DNA of our business, reflecting the
					unique blend of qualities found in every member of our global family.
				</p>
				<br />
				<p className="">
					The Airbus brand is not just a sign, a logo or a colour, nor the advertising we do. While these are
					elements of a brand, an actual brand – our Brand is something much bigger and more valuable. Brand
					is built every day - by what we say, how we behave in interaction, how we deliver on promise and
					stay true to our values. It is the reason why customers choose us and why talents like to pursue
					their careers at Airbus. It is the sum of all the activities we put out in order to be recognized.
					It is the reason why we can proudly say “We are team Airbus”. For more information please refer to
					the Airbus Brand Centre.
				</p>
				<br />
				<p className="">
					Customer focus is deeply embedded into our mindset, driving us to deliver on time, on cost and on
					quality. We partner with our customers to satisfy their needs and deliver benefits through valuable
					and sustainable solutions. We understand that each of us has an impact on customer relations through
					the work we do, which is why we always act with integrity and to the highest professional standards.
				</p>
			</div>
		</div>
	);
}

export default About;
