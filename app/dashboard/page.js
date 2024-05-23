'use client'

import Button from "../components/common/Button";
import DashboardNavBar from "../components/layout/DashboardNavbar";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import BarChart from "../components/ui/BarChart";
import ProgressBar from "@ramonak/react-progress-bar"

// icons
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";
import DashboardExpense from "../components/layout/DashboardExpense";
import DashbordInvoice from "../components/layout/DashbordInvoice";


export default function Dashboard(){
	return (
		<div className="flex flex-row h-[100vh]">
			<Sidebar />
			{/* Main */}
			<div className="w-[100%] ml-[17rem]">
				<DashboardNavBar />

				{/* Cash flow */}
				<div className="px-4 pt-5">
					<div className="flex justify-between px-5 ">
						<div className="flex flex-col items-center">
							<h1 className="text-xl font-semibold">Cash Flow</h1>
							<div className="flex space-x-1">
								<span className="text-md tracking-widest text-gray-800">Past 12 months</span>
								<MdOutlineArrowDropDown size={26} color={'#004940d3'} className="cursor-pointer"/>
							</div>
						</div>
						<div className="flex items-center space-x-3 mr-5">
							<button className="border h-[70%] px-4 bg-[#004940d3] text-white rounded">Money In/Out</button>
							<button className="border h-[70%] px-4 rounded">Bank Balance</button>
						</div>
					</div>
					<div className="flex justify-between mt-6">
						<div className="flex flex-col items-center">
							<span className="text-4xl font-extrabold">Ksh 43, 100</span>
							<span className="text-md font-extralight">Current Cash Balance</span>
						</div>
						<div className="flex space-x-4 items-center mr-5">
							<div className="flex"><GoDotFill size={20}  color={'#004940d3'}/>Money In</div>
							<div className="flex"><GoDot size={20} color={'#004940d3'} /> Money Out</div>
						</div>
					</div>
					<div className="">
					<BarChart />
					</div>
				</div>
				<div className="flex justify-between m-4 space-x-4">
					 {/* Invoices */}
					 <DashbordInvoice />
					 <DashboardExpense />
				</div>
			</div>
		</div>

	);
}
