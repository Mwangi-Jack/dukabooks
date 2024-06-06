import Button from "@/app/components/common/Button";
import FloatingLabelInput from "@/app/components/common/FloatingLabelInput";
import Footer from "@/app/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";

// icons
import { FcGoogle } from "react-icons/fc";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";

export default function Login(){
	return (
		<div className="ml-10">
			<div className="mt-4">
				<Image src={'/static/images/logo2.png'} height={100} width={100} alt={'login banner'} />
			</div>
			<div className="flex justify-evenly">
				<div className="flex flex-col items-center justify-center  space-y-10">
					<div className="flex flex-col items-center space-y-2">
						<span className="text-3xl font-extrabold">Welcome Back!</span>
						<span className="text-sm">Please Enter Your Email and Password to Login</span>
					</div>
					<div>
						<div className="flex flex-col space-y-4">
							<FloatingLabelInput className="cursor-pointer"  label="username/email" type="text" />
							<FloatingLabelInput className="cursor-pointer" label="password" type="password" />
							<Button text={'Login'}/>
						</div>
						<div className="flex justify-end mt-2">
							<Link href={'/'}>Forgot Password ?</Link>
						</div>
					</div>
						<div className="flex flex-col w-[100%] items-center px-3">
							<div className="flex items-center justify-center w-[100%]">
								<span className="w-[50%]"><hr /></span>
								<span className="ml-2 mr-2 text-xl">or</span>
								<span className="w-[50%]"><hr /></span>
							</div>
							<span>Login with</span>
						</div>
						<div className="flex flex-col items-center space-y-2" >
							<div className="flex justify-between w-[100px]">
								<FcGoogle  size={25}/>
								<PiMicrosoftOutlookLogo  size={25} color={'blue'}/>
							</div>
						</div>
				</div>
				<div>
					<Image src={'/static/images/avatar4.jpg'} width={500} height={500} />
				</div>
			</div>

			{/* <Footer /> */}
		</div>

	)
}
