import Jumbotron from '../components/Jumbotron';

const LaporTamu = () => {
	return (
		<div>
			<Jumbotron
				mode="half"
				height="min-h-[60vh]"
				paragraph="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
				title="Pelaporan Tamu"
				background="bg-lapor-image"
			/>

			<section className="flex justify-center items-center px-10 my-12 min-h-[90vh]">
				<iframe
					src="https://docs.google.com/forms/d/e/1FAIpQLSc7xBfFutq1Stv1qpQfAnlBNxX_fdTZcnJwnhr2X_ZtU6KeEQ/viewform?embedded=true"
					width="640"
					height="1130"
					frameborder="0"
					marginheight="0"
					title="lapor-form"
					marginwidth="0">
					Loading…
				</iframe>
			</section>
		</div>
	);
};

export default LaporTamu;
