
function ContactForm (){
	return (
		<div className="flex flex-col border space-y-10 px-10 py-10">
			<div>
				<input
					className="m-2  border-b-2 outline-none"
					type={'text'}
					placeholder={'First Name'}

				/>
				<input
					className="m-2  border-b-2 outline-none"
					type={'text'}
					placeholder={'Second Name'}
				/>
			</div>
			<input
				className="m-2  border-b-2 outline-none"
				type={'email'}
				placeholder={'Email Address'}
			/>
			<input
				className="m-2  border-b-2 outline-none"
				type={'tel'}
				placeholder={'Phone Number'}
				/>
			<textarea className="border p-2 h-28" placeholder="Write Message...."></textarea>

			<div>
				<button className="border w-full bg-[#004940] rounded-md m-y-10 text-white py-2">Send Message</button>
			</div>
		</div>
	)
}


export default ContactForm;
