'use client'

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@/app/components/common/Button";
import FloatingLabelInput from "@/app/components/common/FloatingLabelInput";


// icons
import { FcGoogle } from "react-icons/fc";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import useUserHook from "@/app/hooks/useUserHook";

export default function Login(){
	const { login } = useUserHook();
	const router = useRouter()

	const [form, setForm] = useState({
		"username": null,
		"password": null
	})

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value
		})
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		const user = login(form)
		user ? (
			toast.success("Login Successfull!"),
			router.push(`/${user.id}/dashboard`)
		) :
			toast.error("Login failed. Please check your credentials")
	}

	return (
		<>
			<div className="ml-10">
				<div className="mt-4">
					<Image src={'/static/images/logo2.png'} height={100} width={100} alt={'logo'} />
				</div>
				<div className="flex justify-evenly">
					<div className="flex flex-col items-center justify-center  space-y-10">
						<div className="flex flex-col items-center space-y-2">
							<span className="text-3xl font-extrabold">Welcome Back!</span>
							<span className="text-sm">Please Enter Your Email and Password to Login</span>
						</div>
						<div>
							<form onSubmit={handleSubmit} className="flex flex-col space-y-4">
								<FloatingLabelInput
									className="cursor-pointer"
									label="username/email"
									type="text"
									name={"username"}
									value={form.username}
									handleChange={handleChange}
									/>
								<FloatingLabelInput
									className="cursor-pointer"
									label="password"
									type="password"
									name={"password"}
									value={form.password}
									handleChange={handleChange}
								/>
								<Button type="submit" text={"Login"} />
							</form>
							<div className="flex justify-end mt-2">
								<Link href={'/'}>Forgot Password ?</Link>
							</div>
						</div>
							<div className="flex flex-col w-[100%] items-center px-3">
								<div className="flex items-center justify-center w-[100%]">
									<span className="w-[50%]"><hr /></span>
									<span className="ml-2 mr-2 text-xl">or</span>
									<span className="w-[50%]"><hr /></span>
								</div>
								<span>Login with</span>
							</div>
							<div className="flex flex-col items-center space-y-2" >
								<div className="flex justify-between w-[100px]">
									<FcGoogle  size={25}/>
									<PiMicrosoftOutlookLogo  size={25} color={'blue'}/>
								</div>
							</div>
					</div>
					<div className="flex flex-col items-center space-y-2">
						<Image src={'/static/images/avatar4.jpg'} width={500} height={500} alt="login banner" />
						<span className="">Don&apos;t have an account ? <Link href={'/auth/signup'} className=" font-black">Signup</Link></span>
					</div>
				</div>

				{/* <Footer /> */}
			</div>

			<ToastContainer
				position="top-right"
				theme="dark"
			/>
		</>
	)
}
