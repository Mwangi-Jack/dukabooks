'use client'

import ProgressBar from "@ramonak/react-progress-bar"

function DashbordInvoice(){
	return (
	<div className="basis-1/2 border px-2 py-6 shadow-lg rounded">
		<span className="text-xl font-extrabold">Invoices</span>
		<div className="space-y-4">
			<div className="mt-2">
				<span className="font-bold">Ksh 1000</span>
				<span> Last 365 Days</span>
			</div>
			<div className="flex justify-between">
				<div className="flex flex-col">
					<span className="font-bold">Ksh 230</span>
					<span>Overdue</span>
				</div>
				<div className="flex flex-col">
					<span className="font-bold">Ksh 230</span>
					<span>Overdue</span>
				</div>
			</div>
			<div>
				<ProgressBar
					bgColor="#004940"
					borderRadius="4px"
					completed={30}
				/>
			</div>

			<div className="space-y-4">
				<div className="space-x-2">
					<span className="font-bold">Ksh 3, 234 Paid</span>
					<span className="text-sm">Limit 30 Days</span>
				</div>
				<div className="flex justify-between py-5">
					<div className="flex flex-col">
						<span className="font-bold">Ksh 2,062</span>
						<span>Not Deposited</span>
					</div>
					<div className="flex flex-col">
						<span className="font-bold">Ksh 1,653</span>
						<span>Deposited</span>
					</div>
				</div>
				<ProgressBar
					bgColor="#004940"
					borderRadius="4px"
					completed={30}
				/>
			</div>
		</div>
	 </div>
	)
};

export default DashbordInvoice;
