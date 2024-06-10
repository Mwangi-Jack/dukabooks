'use client'

import React, { useState , useEffect } from "react"
import axios from "axios";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

// const baseUrl = "https://duka-books-api.vercel.app"
const baseUrl = " http://localhost:3001";

export const REQUEST_STATUS = {
	LOADING: "loading",
	SUCCESS: "success",
	FAILURE: "failure"
}
function useUserHook(){
	const [ users, setUsers ] = useState([]);
	const [ err, setErr ] = useState('');
	const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING)

	useEffect(() =>{
		async function getUsers(){
			try {
				const response = await axios.get(`${baseUrl}/users`)
				setUsers(response.data)
				setRequestStatus(REQUEST_STATUS.SUCCESS)
				console.log("ALL USERS::::", users)
			} catch (err){
				setRequestStatus(REQUEST_STATUS.FAILURE)
				setErr(err)
			}
		}

		getUsers()
	}, [])


	function login(form) {
		// console.log("FORM TO LOGIN", form.username, "::::", form.password)
		console.log("USERS FROM LOGIN FUNC::::", users)
		try {
			const user = users.find((user) => user.password == form.password && user.FName == form.username)

			console.log("FOUND USER::::", user)
			if (!user) {
				return null
			}

			return user

		} catch (err) {
			setErr("Error While logging In:", err)
		}

	}

	async function register(form){
		const newUser = {
			...form,
			id: uuidv4()
		}
		try {
			const response = await axios.post(`${baseUrl}/users`, newUser)
			console.log(response.data);
			setRequestStatus(REQUEST_STATUS.SUCCESS)

			return newUser

		} catch (err){
			setErr("Error While Registering User::", err)
			setRequestStatus(REQUEST_STATUS.FAILURE)
		}
	}

	return {
		users,
		login,
		register
	}
}


export default useUserHook;
