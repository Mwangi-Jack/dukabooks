'use client'

import DashboardNavBar from '@/app/components/layout/DashboardNavbar'
import Sidebar from '@/app/components/layout/Sidebar'
import React from 'react'


export default function Reports(){
	return (
		<div className="">
			<Sidebar />
			<div className=" basis-1/2 border border-red-600 ml-[17rem]">
				<DashboardNavBar />
				<h1>REPORTS DYNAMIC</h1>
			</div>
		</div>
	)
}
