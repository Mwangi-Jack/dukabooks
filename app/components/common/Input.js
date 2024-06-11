'use client'

import React, { useState } from "react"


const Input = ({ name="item1", type='text', handleChange, label }) => {
	return (
		<div className="flex flex-col">
			<label htmlFor={name}>{label}</label>
			<input
				className="w-full px-2 rounded outline-none"
				name={name}
				type={type}
				onChange={handleChange}
				placeholder= {`${name}`}
			/>
		</div>
	)
}

export default Input;
