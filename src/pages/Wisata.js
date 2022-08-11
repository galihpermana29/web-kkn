import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Jumbotron from '../components/Jumbotron';

const Wisata = ({ moduleData }) => {
	const navigate = useNavigate();
	useEffect(() => {
		navigate('/hiburan-wisata/tirta-umbulan');
	}, []);

	return (
		<div>
			<Jumbotron
				mode="half"
				height="min-h-[60vh]"
				paragraph="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
				title="Hiburan & Wisata"
			/>
		</div>
	);
};

export default Wisata;
