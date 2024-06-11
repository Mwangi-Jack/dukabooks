'use client'

import React, { useState } from "react";
import Link from "next/link";
import  Image from "next/image"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/material.css'
import FloatingLabelInput from "@/app/components/common/FloatingLabelInput";
import Button from "@/app/components/common/Button";

// icons
import { FcGoogle } from "react-icons/fc";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import useUserHook from "@/app/hooks/useUserHook";

export default function Signup(){
	const router = useRouter();
	const { register } = useUserHook();
	const [phone, setPhone] = useState('');
	const [form, setForm] = useState({
		"FName": null,
		"SName": null,
		"email": null,
		"phone": "+254",
		"password": null,
		"Cpassword": null
	})


	const handlePhoneInput = (value) => {
		setForm({...form, "phone": value})
		console.log("PHONE NUMBER:::", value)
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name] :value
		})

	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(form)
		const user = register(form)
		console.log("USER CREATED:::", user)
		toast.success("Registration Successfull!")
		router.push(`/${user.id}/dashboard`)
	}

	return (
		<>
			<div className="ml-10">
				<div className="mt-4">
					<Image src={'/static/images/logo2.png'} height={100} width={100} alt={'logo'} />
				</div>
				<div className="flex justify-evenly">
					<div className="flex flex-col items-center justify-center  space-y-5">
						<div className="flex flex-col items-center space-y-2">
							<span className="text-3xl font-extrabold">Welcome!</span>
							<span className="text-sm">Please Enter Your details to Signup</span>
						</div>
						<div>
							<form onSubmit={handleSubmit} className="flex flex-col space-y-4">
								<div className="flex  space-x-2">
									<FloatingLabelInput
										className="cursor-pointer"
										label="First name"
										type="text"
										name={"Fname"}
										value={form.Fname}
										handleChange={handleChange}
										/>
									<FloatingLabelInput
										className="cursor-pointer"
										label="Second name"
										type="text"
										name={"Sname"}
										handleChange={handleChange}
										value={form.Sname}
										/>
								</div>
								<div className="flex  space-x-2">
									<FloatingLabelInput
										className="cursor-pointer"
										label="Email"
										type="email"
										name={"email"}
										value={form.email}
										handleChange={handleChange}
										/>
									<div className="my-6">
										<PhoneInput
											className='h-[50px] mt-[-10px]'
											country={'ke'}
											value={form.phone}
											name={"phone"}
											onChange={handlePhoneInput}
											inputStyle={{
											width: '100%',
											border: '1px solid #ccc',
											borderRadius: '4px',
											height:'100%',
											outline: 'none'
											}}
											inputProps={{required: true}}
											containerStyle={{ width: '100%' }}
										/>
									</div>
								</div>
								<div className="flex  space-x-2">
									<FloatingLabelInput
										className="cursor-pointer"
										name={"password"}
										value={form.password}
										label="Password"
										type="password"
										handleChange={handleChange}
										/>
									<FloatingLabelInput
										className="cursor-pointer"
										name={"Cpassword"}
										label="Confirm password"
										value={form.Cpassword}
										type="password"
										handleChange={handleChange}
									/>
								</div>
								<Button type={"submit"} text={"Signup"} />
							</form>
						</div>
							<div className="flex flex-col w-[100%] items-center px-3">
								<div className="flex items-center justify-center w-[100%]">
									<span className="w-[50%]"><hr /></span>
									<span className="ml-2 mr-2 text-xl">or</span>
									<span className="w-[50%]"><hr /></span>
								</div>
								<span>Signup with</span>
							</div>
							<div className="flex flex-col items-center space-y-2" >
								<div className="flex justify-between w-[100px]">
									<FcGoogle  size={25}/>
									<PiMicrosoftOutlookLogo  size={25} color={'blue'}/>
								</div>
							</div>
					</div>
					<div className="flex  flex-col items-center">
						<Image src={'/static/images/avatar.jpg'} width={500} height={500} alt="signup banner" />
						<span>Already have an account ? <Link href={'/auth/login'} className="font-black">Login</Link></span>
					</div>
				</div>

				{/* <Footer /> */}
			</div>
			<ToastContainer position="top-right" />
		</>
	)
}
