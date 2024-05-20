'use client'

import Image from "next/image";
import Button from "../common/Button";
import Link from "next/link";

// icons
import { MdKeyboardArrowRight } from "react-icons/md";

const SideLinks = [
	{
	  id: 1,
	  name: 'Dashboard',
	  path: '/dashboard'
	},
	{
	  id: 2,
	  name: 'Transactions',
	  path: '/dashboard/transactions'
	},
	{
	  id: 3,
	  name: 'Expenses',
	  path: '/dashboard/expenses'
	},
	{
	  id: 4,
	  name: 'Sales',
	  path: '/dashboard/sales'
	},
	{
		id: 4,
		name: 'Projects',
		path: '/dashboard/projects'
	},
	{
		id: 4,
		name: 'Reports',
		path: '/dashboard/reports'
	},
	{
		id: 4,
		name: 'Help',
		path: '/dashboard/help'
	  },

  ]

export default function Sidebar(){
	const handleButtonClick = (path)=>{
		alert(`You are being redirected to ${path}`)
		console.log(`You are being redirected to ${path}`)
	}
	return (
		<div className="basis-1/5 h-[100%] shadow-2xl">
			<div className="py-5 px-5">
				<div className="flex justify-center">
					<Image src={'/static/images/logo2.png'} height={100} width={100} />
				</div>
				<div className="py-5">
					<Button text={'+ Create New'}/>
				</div>
			</div>

			<div className="space-y-4 w-[100%]">
				{
					SideLinks.map((link)=>{
						return (
							<button onClick={()=> handleButtonClick(link.path)} className="py-2 px-1 flex justify-between hover:bg-[#D9D9D9] w-[100%]" key={link.id}>
								<span >{link.name}</span>
								<MdKeyboardArrowRight size={25} />
							</button>
						)
					})
				}
			</div>
		</div>
	)
}
