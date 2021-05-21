import React, { useState, useEffect } from 'react'
import { Link,Redirect, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../common/Loader'
import * as Yup from 'yup';
import TextInput from "../common/TextInput";
import { Form, Formik } from 'formik';
import Button from '../common/Button';
import { register } from '../../actions/userActions'
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  useEffect(() => {
	if(error){
		toast.error(error)
	  }
    if (userInfo) {
      // history.push(redirect)
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    }
  }, [ userInfo,error])

  let history = useHistory();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values.name,values.email,values.password)).then(() => {
		history.push('/')
		resetForm()
	})
  }


  return (
		<div>
			{loading && <Loader />}
			{/* {message && <div>{message}</div>}
			{error && <div>{error}</div>} */}
			<Formik
				initialValues={{
					name: "",
					email: "",
					password: "",
					confirmpassword: "",
				}}
				validationSchema={(props) =>
					Yup.lazy((values) => {
						const { email, password } = values;
						return Yup.object().shape({
							name: Yup.string().required(),
							email: Yup.string().email("Please enter a valid email").required("Please enter email"),
							password: Yup.string().min(5).required("Please enter a password"),
							confirmpassword: Yup.string().min(5).required("Please enter a password").oneOf([Yup.ref('password'), null], "Does not match with password"),
						});
					})
				}
				onSubmit={handleSubmit}
			>
				<Form className="lg:py-10 lg:px-40 px-4 py-4">
					<TextInput className="mt-6" name="name" placeholder="Name" />
					<TextInput className="mt-6" name="email" placeholder="Email id" />
					<TextInput className="mt-6" name="password" placeholder="Password" inputType="password" />
					<TextInput className="mt-6" name="confirmpassword" placeholder="Password" inputType="password" />
					<div className="text-center mt-6">
						<Button type="submit">Register</Button>
					</div>
				</Form>
			</Formik>
			<ToastContainer position="bottom-right" />
		</div>
  );
}

export default Signup;