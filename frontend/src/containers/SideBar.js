import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function SideBar() {
	const userLogin = useSelector((state) => state.userLogin);
	const { loading, error, userInfo } = userLogin;
	const [collaps, setCollaps] = useState("-translate-x-48");

	function handleCollaps() {
		if (collaps === "") {
			setCollaps("-translate-x-48");
		} else {
			setCollaps("");
		}
	}
	function handleClicks() {
			setCollaps("-translate-x-48");
	}

	return (
		<div
			style={{ height: "92vh" }}
			className={` absolute ${collaps} transform duration-700 z-50 w-2/12 text-white font-bold bg-current bg-opacity-90 flex flex-col justify-between `}
		>
			<nav className=" w-full">
				<ul className="px-2 mx-2">
					<Link to="/">
						<li
							onClick={handleClicks}
							className="py-2 flex justify-between p-2  border-b hover:opacity-70 cursor-pointer"
						>
							<span>Home</span>
							<i className="fas fa-home items-center flex justify-center w-5 h-6"></i>
						</li>
					</Link>
					<Link to="/aircraft">
						<li
							onClick={handleClicks}
							className="py-2 flex justify-between p-2  border-b hover:opacity-70 cursor-pointer"
						>
							<span>Aircrafts</span>
							<i className="fas fa-plane-departure items-center flex justify-center w-5 h-6"></i>
						</li>
					</Link>
					<Link to="/safety">
						<li
							onClick={handleClicks}
							className="py-2 flex justify-between p-2  border-b hover:opacity-70 cursor-pointer"
						>
							<span>Safety</span>
							<i className="fas fa-shield-virus items-center flex justify-center w-5 h-6"></i>
						</li>
					</Link>
					{userInfo && userInfo.isAdmin && (
					<Link to="/addCategories">
						<li
							onClick={handleClicks}
							className="py-2 flex justify-between p-2  border-b hover:opacity-70 cursor-pointer"
						>
							<span>Add Categories</span>
							<i className="fas fa-search-plus items-center flex justify-center w-5 h-6"></i>
						</li>
					</Link>
					)}
					<Link to="/about">
						<li
							onClick={handleClicks}
							className="py-2 flex justify-between p-2 border-b hover:opacity-70 cursor-pointer"
						>
							<span>About</span>
							<i className="fas fa-info-circle items-center flex justify-center w-5 h-6"></i>
						</li>
					</Link>
					<Link to="/getannouncements">
						<li
							onClick={handleClicks}
							className="py-2 flex justify-between p-2 border-b hover:opacity-70 cursor-pointer"
						>
							<span>Announcements</span>
							<i className="fas fa-bullhorn items-center flex justify-center w-5 h-6"></i>
						</li>
					</Link>
					{userInfo && userInfo.isAdmin && (
						<>
						<Link to="/createannouncement">
							<li
								onClick={handleClicks}
								className="py-2 flex justify-between p-2 border-b hover:opacity-70 cursor-pointer"
							>
								<span>Create Announcement</span>
								<svg
									className="w-5 h-6 ml-2 inline-block"
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
							</li>
						</Link>
						<Link to="/analytics">
						<li
							onClick={handleClicks}
							className="py-2 flex justify-between p-2 border-b hover:opacity-70 cursor-pointer"
						>
							<span>Analytics</span>
							<i className="fas fa-tachometer-alt items-center flex justify-center w-5 h-6"></i>
						</li>
					</Link>
					</>
					)}
					{userInfo && userInfo.isAdmin && (
						<Link to="/buglisting">
							<li
								onClick={handleClicks}
								className="py-2 flex justify-between p-2 border-b hover:opacity-70 cursor-pointer"
							>
								<span>See Bugs</span>
								<svg
									className="w-5 h-6 ml-2 inline-block"
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
							</li>
						</Link>
					)}
				</ul>
			</nav>
			<div className="flex mx-2 font-bold justify-end p-2">
				<svg
					className="w-6 ml-2 cursor-pointer h-6 inline-block"
					fill="none"
					onClick={handleCollaps}
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M4 6h16M4 12h8m-8 6h16"
					></path>
				</svg>
			</div>
		</div>
	);
}

export default SideBar;
