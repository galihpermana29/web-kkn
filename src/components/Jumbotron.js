const Jumbotron = ({
	height = 'min-h-[100vh]',
	mode = 'full',
	paragraph = 'Welcome to',
	title = 'Ngadireso',
	background = 'bg-homepage-image',
	children,
}) => {
	return (
		<div
			className={`${height} ${background} flex justify-center items-center text-center bg-bottom`}>
			{mode === 'children' && children}
			{mode !== 'children' && (
				<div
					className={`flex ${
						mode === 'full' ? 'flex-col-reverse' : 'flex-col'
					} items-center`}>
					<h1 className="text-[70px] lg:text-[100px] text-white font-bold">
						{title}
					</h1>
					<p className="text-white">{paragraph}</p>
				</div>
			)}
		</div>
	);
};

export default Jumbotron;
