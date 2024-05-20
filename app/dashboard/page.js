import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

export default function Dashboard(){
	return (
		<div>
			<Header />
			<div className="mt-10 flex justify-between">
				<div className="w-[20%] h-[93vh] border">
					<Sidebar />
				</div>
				<div className="border w-[80%]">
					<h1>Dashboard Page</h1>
				</div>
			</div>
			{/* <Footer /> */}

		</div>

	);
}
