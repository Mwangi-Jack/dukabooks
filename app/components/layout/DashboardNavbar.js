
import { FaBell } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Dropdown from "../ui/Dropdown";


function DashboardNavBar(){
	return (
		<div className="border flex justify-end items-center space-x-8 px-6 h-[50px]">
			<div className="relative my-6">
				<input
					type="text"
					className="w-full pl-4 pr-10 py-2 border focus:outline-none focus:ring-2 h-[30px] rounded"
					placeholder="Search..."
				/>
				<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
					<FaSearch className="text-gray-500" />
				</div>
			</div>
			<FaBell size={20} color={'#004940'} />
			<Dropdown />
		</div>
	)
}

export default DashboardNavBar;
