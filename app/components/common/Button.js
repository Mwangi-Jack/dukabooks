
function CustomBtn({ text, action }){
	return (
		<button
			className="border bg-[#004940d3] rounded text-white py-1 hover:bg-[#004940] w-[100%]"
			onClick={action}
			>{text}</button>

	)
}

export default CustomBtn;
