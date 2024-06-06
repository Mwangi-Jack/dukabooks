'use client'

import Image from "next/image";
import CustomBtn from "../common/Button";
import Link from "next/link";

// icons
import { MdKeyboardArrowRight } from "react-icons/md";
import Modal from "../ui/Modal";
import { useState } from "react";

const SideLinks = [
	{
	  id: 1,
	  name: 'Dashboard',
	  path: '/dashboard'
	},
	{
	  id: 2,
	  name: 'Transactions',
	  path: '/transactions'
	},
	{
	  id: 3,
	  name: 'Expenses',
	  path: '/expenses'
	},
	{
	  id: 4,
	  name: 'Sales',
	  path: '/sales'
	},
	{
		id: 4,
		name: 'Projects',
		path: '/projects'
	},
	{
		id: 4,
		name: 'Reports',
		path: '/reports'
	},
	{
		id: 4,
		name: 'Help',
		path: '/help'
	  },

  ]

export default function Sidebar(){
	const [id, setId] = useState('12bca');
	const [linkActive, setLinkActive] = useState(false);

	const handleButtonClick = (path)=>{
		alert(`You are being redirected to ${path}`)
		console.log(`You are being redirected to ${path}`)
	}
	return (
		<div className="basis-1/5 h-[100%] shadow-2xl fixed w-[17rem] bg-white">
			<div className="py-5 px-5">
				<div className="flex justify-center">
					<Image src={'/static/images/logo2.png'} height={100} width={100} />
				</div>
				<div className="py-5">
					<Modal />
				</div>

			</div>

			<div className="space-y-4 w-[100%]">
				{
					SideLinks.map((link)=>{
						return (
							<Link
								href={`/${id}/${link.path}`}
								className='py-2 px-1 flex justify-between hover:bg-[#D9D9D9] w-[100%]'
								key={link.id}
								onClick={()=>{setLinkActive(true)}}
								>
								<span >{link.name}</span>
								<MdKeyboardArrowRight size={25} />
							</Link>
						)
					})
				}
			</div>
		</div>
	)
}
