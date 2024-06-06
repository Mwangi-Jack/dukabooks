'use client'

import { GoDotFill } from "react-icons/go";
import DoughnutChart from "../ui/DoughnutChart";

export const expenses = [
	{
		id: 1,
		amount: 'ksh 1, 654.00',
		name: 'Rent & Lease',
		color: 'gray'
	},
	{
		id: 2,
		amount: 'ksh 932.00',
		name: 'Job Supplies',
		color: ''
	},
	{
		id: 3,
		amount: 'ksh 302.00',
		name: 'Automotive',
		color: ''
	},
	{
		id: 4,
		amount: 'ksh 752.00',
		name: 'Maintenance',
		color: ''
	}
]

function DashboardExpense(){
	return (
		<div className=" basis-1/2 border px-2 py-6 shadow-lg rounded">
			<span className="font-bold text-2xl">Expenses</span>
			<div>
				<div className="space-x-2">
					<span className="font-bold text-xl">Ksh 3,500.00</span>
					<span>Last Month</span>
				</div>
				<div className="flex">
					<div className="">
						<DoughnutChart />
					</div>
					<div className="flex flex-col justify-center space-y-3">
						{expenses.map((expense,index)=>{
							return (
								<div className="flex" key={index}>
									<span className="flex items-center">
										<GoDotFill size={20} color={expense.color} />
									</span>
									<div className="flex flex-col">
										<span className="font-bold">{expense.amount}</span>
										<span className="text-sm text-gray-700">{expense.name}</span>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default DashboardExpense;
