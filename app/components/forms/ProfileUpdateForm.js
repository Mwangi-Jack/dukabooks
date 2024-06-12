'use client'

import React, { useState } from "react"
import FloatingLabelInput from "../common/FloatingLabelInput"
import PhoneInput from "react-phone-input-2"

import { Button } from "@headlessui/react"



function ProfileUpdateForm(){
	const [ form, setForm ] = useState({
		"Fname": null,
		"Sname": null,
		"phone": null,
		"email": null,
		"password": null
	})

	const handleChange = (e) =>{
		const { name, value } = e.target;

		setForm({
			...form,
			[name]: value
		})
	}

	const handleSubmit = (e) =>{
		e.preventDefault();
		console.log(form)
	}
	return (
		<form onSubmit={handleSubmit}className="w-full border">
			<div className="flex space-x-10">
				<FloatingLabelInput type={'Fname'} label={'First Name'} name={'Fname'} handleChange={handleChange} />
				<FloatingLabelInput type={'Sname'} label={'First Name'} name={'Fname'} handleChange={handleChange} />
			</div>
			<div className="flex space-x-10">
				<FloatingLabelInput type={'email'} label={'First Name'} name={'Fname'} handleChange={handleChange} />
				{/* <FloatingLabelInput type={''} label={'First Name'} name={'Fname'} handleChange={handleChange} /> */}
				<PhoneInput
					className='h-[50px] mt-[-10px]'
					country={'uk'}
					value={form.phone}
					name={"phone"}
					onChange={handleChange}
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
			<div className="flex space-x-10">
				<FloatingLabelInput type={'Fname'} label={'First Name'} name={'Fname'} handleChange={handleChange} />
				<FloatingLabelInput type={'Fname'} label={'First Name'} name={'Fname'} handleChange={handleChange} />
			</div>
			<Button />
		</form>
	)
}

export default ProfileUpdateForm;
