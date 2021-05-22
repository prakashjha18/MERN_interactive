import React, { useState, useEffect } from "react";
import { Route, Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Airbus_Logo from "../Logo/logo_white.svg";
import Modal from "../components/common/Modal";
import Login from "../components/accounts/Login";
import Signup from "../components/accounts/Signup";
import { logout } from '../actions/userActions'

function NavBar() {
	const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
	let history = useHistory();

  const logoutHandler = () => {
    dispatch(logout())
	history.push('/');
  }
	const [loginModal,setLoginModal] = useState(false);
	const [signUpModal,setSignUpModal] = useState(false);
	useEffect(() => {
		if (userInfo) {
		  // history.push(redirect)
		  setLoginModal(false)
		  setSignUpModal(false)
		}
	  }, [ userInfo, loginModal, signUpModal])
	return (
		<div>
			<div className="flex top-0 z-20 fixed  justify-between m-auto w-screen md:px-32 sm:px-1 bg-opacity-90 bg-current text-white border-b-1">
				<div className="p-2 -mx-20">
					<Link to="/">
						{" "}
						<img src={Airbus_Logo} alt="airbus logo" className="w-auto h-8" />
					</Link>
				</div>
				{userInfo ? (
					<div className="flex items-center -mx-24">
						<div
							className="p-3 text-sm font-bold h-full hover:border-b-4 cursor-pointer"
							onClick={() => setLoginModal(!loginModal)}
						>
							{userInfo.name}
						</div>
						<div
							className="p-3 text-sm font-bold h-full hover:border-b-4 cursor-pointer"
							onClick={() => setLoginModal(!loginModal)}
						>
							Profile
						</div>
						<div
							className="p-3 text-sm font-bold h-full hover:border-b-4 cursor-pointer"
							onClick={logoutHandler}
						>
							logout
						</div>
					</div>
				) : (
					<div className="flex items-center -mx-24">
						<div
							className="p-3 text-sm font-bold h-full hover:border-b-4 cursor-pointer"
							onClick={() => setLoginModal(!loginModal)}
						>
							Log In
						</div>
						<div
							className="p-3 text-sm font-bold h-full hover:border-b-4 cursor-pointer"
							onClick={() => setSignUpModal(!signUpModal)}
						>
							Signup
						</div>
					</div>
				)}
			</div>
			<Modal isOpen={loginModal} toggle={() => setLoginModal(!loginModal)} header="Enter Credentials">
				<Login />
			</Modal>
			<Modal isOpen={signUpModal} toggle={() => setSignUpModal(!signUpModal)} header="Register">
				<Signup />
			</Modal>
		</div>
	);
}

export default NavBar;
