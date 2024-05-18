import Image from "next/image";
import Card from "../ui/Card";

const PricingPlans = [
	{
		'name': 'Hobby',
		'description': 'The essentials to provide best work for your business',
		'price': 15,
		'features': ['5 products', 'Up to 2 businesses', 'basic analytics']
	},
	{
		'name': 'Freelancer',
		'description': 'The essentials to provide best work for your business',
		'price': 30,
		'features': ['5 products', 'Up to 4 businesses', 'basic analytics', '48-hour support response time']
	},
	{
		'name': 'Startup',
		'description': 'A plan that scales with your rapidly growing business',
		'price': 60,
		'features': [
			'25 products',
			'Up to 8 businesses',
			'basic analytics',
			'24-hour support response time',
			'Marketing automations'
		]
	},
	{
		'name': 'Enterprise',
		'description': 'A plan that scales with your rapidly growing business',
		'price': 90,
		'features': [
			'25 products',
			'Up to 8 businesses',
			'basic analytics',
			'21-hour, dedicated support response time',
			'Marketing automations',
			'custom reporting tools'
		]
	}
]

export default function Pricing() {
  return (
	<div>
		<div className="flex flex-col items-center space-y-4">
			<h1 className="text-3xl font-bold">Pricing</h1>
			<h1 className="font-bold">Pricing Plans for SMEs of All Sizes</h1>
			<article className="flex flex-col items-center">
				<span>Choose an affordable plan that's packed with the best features</span>
				<span> for enhancing your business processes, facilitating</span>
				<span>smooth transaction records, and driving sales.</span>
			</article>
		</div>
		<div className="flex justify-evenly m-10">
			{PricingPlans.map((plan)=> <Card plan={plan}/>)}
		</div>
	</div>
  );
}
