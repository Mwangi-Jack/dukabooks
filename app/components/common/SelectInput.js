'use client'

import React, { useState, useEffect } from 'react'

const options = [
	{
		id: 1,
		name: 'Expenses'
	},
	{
		id: 2,
		name: 'Transactions'
	},
	{
		id: 3,
		name: 'Sales'
	},
]

const SelectInput = ({ label }) => {
	const [selectOption, setSelectOption] = useState()

	const handleChange = (e) => {
		setSelectOption(e.target.value)
		console.log(e.target.value)
	}

	return (
		<div className='flex flex-col w-1/2'>
			<label>{label}</label>
			<select
				className="p-1 rounded"
				value={selectOption}
				onChange={handleChange}
			>
				{options.map((option, key) => {
					return (
						<option key={key} value={option.name}>{option.name}</option>
					)
				})}
			</select>
		</div>
	)
}


export default SelectInput;
