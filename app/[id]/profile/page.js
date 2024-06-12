'use client'

import ProfileUpdateForm from '@/app/components/forms/ProfileUpdateForm';
import DashboardNavBar from '@/app/components/layout/DashboardNavbar';
import Link from 'next/link';
import React, { useState } from 'react'

import { FaUser } from "react-icons/fa";


function Profile(){
	return (
		<div>
			<DashboardNavBar />
			<div className='px-56 flex'>
				<div className='flex flex-col space-y-4 border h-[92vh] '>
					<Link href={'#profile'} >Update Profile</Link>
					<Link href={'#profile'} >Update Profile</Link>
					<Link href={'#profile'} >Update Profile</Link>
					<Link href={'#profile'} >Update Profile</Link>
					<Link href={'#profile'} >Update Profile</Link>
				</div>
				<div className='border  w-full py-10'>
					<div className='flex justify-center p'>
						<div className='border rounded-full bg-gray-400 w-10 h-10 flex justify-center items-center'><FaUser size={20} color={'#004940'} /></div>
					</div>
					<ProfileUpdateForm />
				</div>
			</div>
		</div>
	)
}

export default Profile;
