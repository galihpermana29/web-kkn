import { useState,useEffect } from 'react';
import Jumbotron from '../components/Jumbotron';
import NgadiresoApi from '../utils/Endpoint';

const Sejarah = ({moduleData}) => {

	const{
		sejarahDesa : seDesa,
		sejarahTirta : seTirta,
		jmbtSejarah : jmbt,
		textSejarah : text
	} = moduleData;

	return (
		<div>
			<Jumbotron
				mode="half"
				type="secondary"
				height="min-h-[60vh]"
				paragraph={text}
				title="Sejarah"
				background={jmbt}
			/>

			<section className="px-12 my-[150px] space-y-5">
				<section>
					<h1 className="text-3xl font-bold mb-5 text-[#3B653E]">
						Sejarah Desa Ngadireso
					</h1>
					<div className='text-justify' dangerouslySetInnerHTML={{__html : seDesa}}/>
				</section>

				<section>
					<h1 className="text-3xl font-bold mb-5 text-[#3B653E]">
						Sejarah Tirta Umbulan
					</h1>
					<div className='text-justify' dangerouslySetInnerHTML={{__html : seTirta}}/>
				</section>
			</section>
		</div>
	);
};

export default Sejarah;
