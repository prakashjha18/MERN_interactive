import React, { useState, useEffect } from 'react'
import { Link,Redirect, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../common/Loader'
import * as Yup from 'yup';
import TextInput from "../common/TextInput";
import { Form, Formik } from 'formik';
import Button from '../common/Button';
import { login } from '../../actions/userActions'
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";

if (typeof window !== "undefined") {
	injectStyle();
}

const Login = ({ }) => {

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  useEffect(() => {
	  if(error){
		toast.error(error)
	  }
  }, [userInfo,error])

  let history = useHistory();
  const handleSubmit = (values, { resetForm }) => {
    //console.log(values);
    dispatch(login(values.email, values.password)).then(() =>{
		history.push('/');
		resetForm();
	})
  }
  return (
		<div>
			{/* {toast.success(error)} */}
			{loading && <Loader />}
			<Formik
				initialValues={{
					email: "",
					password: "",
				}}
				validationSchema={(props) =>
					Yup.lazy((values) => {
						const { email, password } = values;
						return Yup.object().shape({
							email: Yup.string().email("Please enter a valid email").required("Please enter email"),
							password: Yup.string().min(5).required("Please enter a password"),
						});
					})
				}
				enableReinitialize
				onSubmit={handleSubmit}
			>
				<Form className="lg:py-10 lg:px-40 px-4 py-4">
					<TextInput className="mt-6" name="email" placeholder="Email id" />
					<TextInput className="mt-6" name="password" placeholder="Password" inputType="password" />
					<div className="text-center mt-6">
						<Button type="submit">Login</Button>
					</div>
				</Form>
			</Formik>
			<ToastContainer position="bottom-right" />
		</div>
  );
}

export default Login;