import ContactForm from "../components/forms/ContactForm";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";


//icons
import { ImFacebook } from "react-icons/im";
import { SlSocialTwitter } from "react-icons/sl";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";


function Contacts(){
	return (
		<div className="">
			<Header />
			<div className="mt-20 px-4 mx-20 ">
				<h1 className="font-extrabold text-3xl">Contacts</h1>
				<div className="flex mt-8 space-x-60">
						<ContactForm />
					<div className="shadow-xl p-1 rounded-se-[200rem] rounded-bl-[100rem] flex flex-col justify-center items-center w-[20rem] space-y-9 bg-[#F4FBFA]">
						<h1>DukaBooks</h1>
						<div className="flex flex-col justify-center items-center space-y-4">
							<p className="text-gray-500">You can Contact Us through Our</p>
							<span className="font-semibold text-xl">Social Media Handles</span>
							<span className='flex space-x-14 '>
								<ImFacebook size={20} className="cursor-pointer"/>
								<SlSocialTwitter  size={20} className="cursor-pointer"/>
								<BsInstagram size={20} className="cursor-pointer" />
								<FaLinkedinIn size={20} className="cursor-pointer" />
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-6">
				<Footer />
			</div>
		</div>
	)
}


export default Contacts;
