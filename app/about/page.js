import Image from "next/image";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Team from "../components/layout/Team";

function About(){
	return (
		<div>
			<Header />
			<div className="mt-20 px-10 space-y-6">
				<div className="flex flex-col space-y-4 items-center">
					<span className="font-bold text-xl">We Are Here to Streamline All Your SME Business  Activities</span>
					<span>
						<Image src={'/static/images/team.png'} width={700} height={100} alt="team banner" />
					</span>
				</div>
				<div >
					<h1 className="text-lg">Our Story</h1>
					<div className="mt-4">
						<span className="font-bold text-lg">At DukaBooks, we understand the challenges faced <br /> by small and medium-sized enterprises (SMEs) when it comes to bookkeeping.</span>
					</div>
					<div className="mt-4 space-y-4 border py-4 px-2">
						<div className="flex space-x-10">
							<article className="font-thin w-[100%]" >
								We know the excitement and passion that comes
								with running a business, <br /> but we also understand the stress and
								confusion of managing finances because we've been there ourselves.
							</article>
							<article className="font-thin w-[100%]">
								We have a deep knowledge of the unique needs of different types
								of SMEs. So, your team can access precisely the information they
								need, in the way they need it, exactly when they need it.
							</article>
						</div>
						<div className="flex space-x-14">
							<article className="font-thin">
								What's different about DukaBooks is that we're
								also experts in digital finance management.
							</article>
							<article className="font-thin">
								This means you can concentrate on what you do
								best—growing your business.
							</article>
						</div>
						<div className="flex space-x-10">
							<article className="font-thin">
								We know how to simplify the intricacies of bookkeeping and transform them <br />
								into user-friendly software solutions tailored for SMEs.
							</article>
						</div>

					</div>
				</div>
				<div>
					<h1 className="text-2xl font-bold">Meet The Team</h1>
					<Team />
				</div>
			</div>
			<div className="mt-10">
				<Footer />
			</div>
		</div>
	)
}

export default About;
