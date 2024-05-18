import Footer from "@/app/components/layout/Footer";
import Link from "next/link";

export default function Signup(){
	return (
		<div>
			<div className="flex flex-col justify-center items-center mb-10 mt-5">
				<div><span className="text-[50px] font-extrabold">DB</span> DukaBooks</div>
				<div className="form space-y-10 m-5 border p-10 rounded-xl">
					<div className="space-x-10">
						<input type="text" placeholder="First name" className="border rounded pl-2"/>
						<input type="text"  placeholder="Last name" className="border rounded pl-2"/>
					</div>
					<div  className="space-x-10">
						<input  type="email" placeholder="Email" className="border rounded pl-2"/>
						<input  type="tel" placeholder="Phone number" className="border rounded pl-2"/>
					</div>
					<div  className="space-x-10">
						<input  type="text" placeholder="Business name" className="border rounded pl-2"/>
						<input  type="text" placeholder="name" className="border rounded pl-2"/>
					</div>
					<div  className="space-x-10">
						<input  type="password" placeholder="password" className="border rounded pl-2"/>
						<input  type="password" placeholder="confirm password" className="border rounded pl-2"/>
					</div>
					<div className="flex justify-center">
					<button className="border w-60 mt-5 mb-5 rounded p-1 bg-[#004940d7] text-white">Signup</button>
					</div>
					<div >
						<div className="flex items-center">
							<span className="w-[50%]"><hr /></span>
							<span className="ml-2 mr-2 text-xl">or</span>
							<span className="w-[50%]"><hr /></span>
						</div>
						<div className="flex justify-center">
							<button className="border w-60 mt-5 mb-5 rounded p-1 bg-[#004940d7] text-white">SignIn with Google</button>
						</div>

					</div>
					<p>Already have an Account ? <Link href={'/auth/login'}>Login</Link></p>
				</div>
			</div>
			<Footer />
		</div>

	)
}
