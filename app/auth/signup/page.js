'use client'

import React, { useState } from "react";
import Link from "next/link";
import  Image from "next/image"

import PhoneInput from "react-phone-input-2";
// import 'react-phone-input-2/lib/style.css'
import 'react-phone-input-2/lib/material.css'
import Footer from "@/app/components/layout/Footer";
import FloatingLabelInput from "@/app/components/common/FloatingLabelInput";
import Button from "@/app/components/common/Button";

// icons
import { FcGoogle } from "react-icons/fc";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";

export default function Signup(){
	const [phone, setPhone] = useState('');

	return (
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
						<div className="flex flex-col space-y-4">
							<div className="flex  space-x-2">
								<FloatingLabelInput className="cursor-pointer" label="First name" type="text" />
								<FloatingLabelInput className="cursor-pointer" label="Second name" type="text" />
							</div>
							<div className="flex  space-x-2">
								<FloatingLabelInput className="cursor-pointer" label="Email" type="email" />
								{/* <FloatingLabelInput className="cursor-pointer" label="Phone" type="tel" /> */}
								<div className="my-6">
								<PhoneInput
									className='h-[50px] mt-[-10px]'
									country={'ke'}
									value={phone}
									inputStyle={{
									width: '100%',
									// paddingLeft: '50px',
									border: '1px solid #ccc',
									borderRadius: '4px',
									height:'100%',
									outline: 'none'
									}}
									containerStyle={{ width: '100%' }}
								/>
								</div>
							</div>
							<div className="flex  space-x-2">
								<FloatingLabelInput className="cursor-pointer"  label="Password" type="password" />
								<FloatingLabelInput className="cursor-pointer" label="Confirm password" type="password" />
							</div>

							<Button text={'Signup'}/>
						</div>
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
				<div>
					<Image src={'/static/images/avatar.jpg'} width={500} height={500} alt="signup banner" />
				</div>
			</div>

			{/* <Footer /> */}
		</div>

	)
}
