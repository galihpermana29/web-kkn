import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import Jumbotron from '../components/Jumbotron';
import NgadiresoAPI from '../utils/Endpoint';
const Penyuratan = ({moduleData}) => {
	const [surat, setSurat] = useState([]);

	const{
		textSurat : text,
		jmbtSurat : jmbt
	} = moduleData;

	const fetchSurat = async () => {
		const {
			data: data,
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
				paragraph={text}
				type="secondary"
				title="Penyuratan"
				background={jmbt}
			/>

			{surat.length === 0 && (
				<div className="flex justify-center items-center w-full min-h-[70vh]">
					<CircularProgress />
				</div>
			)}
			<section className="min-h-[50vh] flex px-5 lg:px-12 my-[150px] ">
				<div className="flex flex-wrap space-x-5 space-y-5 w-full justify-center ">
					<div></div>
					{surat.length > 0 &&
						surat.map((surat, idx) => (
							<div
								key={surat.id}
								className="w-full min-w-[200px] max-w-[400px] flex items-center h-fit shadow-lg">
								<div className="text-white px-8 flex justify-center items-center mr-3 bg-blackcus min-h-[96px]">
									{idx + 1}
								</div>
								<div className="w-full mr-3">
									<h1 className="font-semibold mb-3">{surat.nama}</h1>
									<a href={surat.link} target="_blank">
										<div className="bg-greencus text-white py-2 px-3 w-full text-center">
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
