'use client'

import React, { useState } from "react"
import Sidebar from "@/app/components/layout/Sidebar"
import DashboardNavBar from "@/app/components/layout/DashboardNavbar"


export default function Expenses(){
	return (
		<div className="">
			<Sidebar />
			<div className=" basis-1/2 border border-red-600 ml-[17rem]">
				<DashboardNavBar />
				<h1>EXPENSES DYNAMIC</h1>
			</div>
		</div>
	)
}
