import Button from "../components/common/Button";
import DashboardNavBar from "../components/layout/DashboardNavbar";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import BarChart from "../components/ui/BarChart";

export default function Dashboard(){
	return (
		<div className="flex flex-row h-[100vh]">
			<Sidebar />
			{/* Main */}
			<div className="w-[100%] ">
				<DashboardNavBar />

				<div>
					<div className="flex justify-between border ">
						<div>
							<h1>Cash Flow</h1>
							<span>Past 12 months</span>
						</div>
						<div className="">
							<Button text={'Money In/Out'} />
							<Button text={'Bank Balance'} />
						</div>
					</div>
					<div>

					</div>
					<div className="flex items-center justify-center w-[50%]">
					<BarChart />
					</div>
				</div>
			</div>
		</div>

	);
}
