import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import Jumbotron from '../components/Jumbotron';
import NgadiresoAPI from '../utils/Endpoint';
const Penyuratan = () => {
	const [surat, setSurat] = useState([]);
	const fetchSurat = async () => {
		const {
			data: { data = {} },
		} = await NgadiresoAPI.getPenyuratan();
		setSurat(data);
	};

	useEffect(() => {
		fetchSurat();
	}, []);
	return (
		<div>
			<Jumbotron
				mode="half"
				height="min-h-[60vh]"
				paragraph="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
				title="Penyuratan"
				background="bg-penyuratan-image"
			/>

			{surat.length === 0 && (
				<div className="flex justify-center items-center w-full min-h-[70vh]">
					<CircularProgress />
				</div>
			)}
			<section className="min-h-[50vh] flex px-12 my-[150px] ">
				<div className="flex flex-wrap space-x-5 space-y-5 w-full justify-center">
					<div></div>
					{surat.length > 0 &&
						surat.map((surat, idx) => (
							<div
								key={surat.id}
								className="w-full min-w-[200px] max-w-[400px] flex items-center lg:h-[80px] lg:min-h-[60px] shadow-lg">
								<div className="text-white px-8 flex justify-center items-center mr-3 bg-lime-800 h-full">
									{idx + 1}
								</div>
								<div className="w-full mr-3">
									<h1 className="font-semibold mb-3">{surat.nama}</h1>
									<a href={surat.link} target="_blank">
										<div className="bg-lime-800 text-white py-2 px-3 w-full text-center">
											Download
										</div>
									</a>
								</div>
							</div>
						))}
				</div>
			</section>
		</div>
	);
};

export default Penyuratan;
