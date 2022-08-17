import style from '../style/style.module.css'
const Jumbotron = ({
	height = 'min-h-[100vh]',
	mode = 'full',
	paragraph = 'Welcome to',
	title = 'Ngadireso',
	background,
	children,
	type,
	bgfixed,
}) => {
	return (
		<div
			style={{
				backgroundImage : `url('${process.env.REACT_APP_ADMIN_URL}${background}')`
			}}
			className={`${height} ${type == 'main' ? style.jumbotronGradient : ' '} ${type == 'secondary' ? style.jumbotronBlack : ' '} flex justify-center items-center text-center relative ${bgfixed ? 'bg-fixed' : ' '} bg-bottom bg-no-repeat bg-cover`}>
			{mode === 'children' && children}
			{mode !== 'children' &&
				(
				<div
					className={`flex ${
						mode === 'full' ? 'flex-col-reverse' : 'flex-col'
					} items-center relative z-10`}>
						<h1 className="text-[50px] lg:text-[100px] text-whitecus font-bold font-bungee">
							{title}
						</h1>
					<p className="text-white px-5 font-medium">{paragraph}</p>
				</div>
			)
			}
		</div>
	);
};

export default Jumbotron;
