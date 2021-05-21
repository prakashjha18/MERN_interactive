import React, { Suspense, useState } from "react";
import Loader from "./components/common/Loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import Announcement from "./containers/Announcement";
import NavBar from "./containers/NavBar";
import SideBar from "./containers/SideBar";
import BugListing from "./containers/BugListing";
import ReportBug from "./containers/ReportBug";
import Bot from './components/chatBot/bot';
import AddCategoryPage from "./containers/AddCategory";
import GetAnnouncements from "./containers/GetAnnouncements";
import About from "./containers/About";
import Safety from "./containers/Safety";
import Listing from "./containers/Listing";
import Aircraft from "./containers/Aircraft";
import DetailList from "./containers/DetailList";
import Dashboard from "./containers/Dashboard";

function App() {
	const [isBotOpen,setIsBotOpen] = useState(false);
	return (
		<Router>
			<div className="App w-screen mt-12  overflow-x-hidden h-screen overflow-y-auto scroll">
				<NavBar />
				<SideBar />
				<Bot isOpen={isBotOpen} toggle={() => setIsBotOpen(!isBotOpen)} />
				<div style={{ height: "100%" }} className=" bg-black bg-opacity-50 overflow-y-auto scroll">
					<Switch>
						<Route
							// exact
							path="/reportbug"
							render={() => (
								<Suspense fallback={<Loader />}>
									<ReportBug />
								</Suspense>
							)}
						/>
						<Route
							// exact
							path="/about"
							render={() => (
								<Suspense fallback={<Loader />}>
									<About />
								</Suspense>
							)}
						/>
						<Route
							// exact
							path="/listing"
							render={() => (
								<Suspense fallback={<Loader />}>
									<Listing />
								</Suspense>
							)}
						/>
						<Route
							// exact
							path="/aircraft"
							render={() => (
								<Suspense fallback={<Loader />}>
									<Aircraft />
								</Suspense>
							)}
						/>
						<Route
							// exact
							path="/detaillist"
							render={() => (
								<Suspense fallback={<Loader />}>
									<DetailList />
								</Suspense>
							)}
						/>
						<Route
							// exact
							path="/safety"
							render={() => (
								<Suspense fallback={<Loader />}>
									<Safety />
								</Suspense>
							)}
						/>
						<Route
							exact
							path="/buglisting"
							render={() => (
								<Suspense fallback={<Loader />}>
									<BugListing />
								</Suspense>
							)}
						/>
						<Route
							exact
							path="/analytics"
							render={() => (
								<Suspense fallback={<Loader />}>
									<Dashboard />
								</Suspense>
							)}
						/>
						<Route
							exact
							path="/getannouncements"
							render={() => (
								<Suspense fallback={<Loader />}>
									<GetAnnouncements />
								</Suspense>
							)}
						/>
						<Route
							exact
							path="/"
							render={() => (
								<Suspense fallback={<Loader />}>
									<HomePage />
								</Suspense>
							)}
						/>
						<Route
							exact
							path="/addCategories"
							render={() => (
								<Suspense fallback={<Loader />}>
									<AddCategoryPage />
								</Suspense>
							)}
						/>
						<Route
							exact
							path="/createannouncement"
							render={() => (
								<Suspense fallback={<Loader />}>
									<Announcement />
								</Suspense>
							)}
						/>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
