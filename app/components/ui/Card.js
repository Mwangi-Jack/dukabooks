import Image from "next/image";

export default function Card({ plan }) {
  return (
	<div className="border w-72 rounded-2xl p-8 hover:border-[#00494060] shadow-md hover:shadow-2xl">
		<div className="space-y-4">
			<h1 className="font-bold text-3xl">{plan.name}</h1>
			<p>{plan.description}</p>
			<p><span className="font-bold text-3xl">Kes {plan.price}</span> /month</p>
		</div>
		<button className="border w-48 mt-5 mb-5 rounded p-1 hover:bg-[#004940d7] hover:text-white">Buy Plan</button>
		<div className="space-y-4">
			{plan.features.map((feature, index)=> <p key={index}>{feature}</p>)}
		</div>

	</div>
  );
}
