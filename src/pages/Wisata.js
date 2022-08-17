import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Jumbotron from '../components/Jumbotron';
import Wis from '../components/Wisata';
import NgadiresoAPI from '../utils/Endpoint';


const Wisata = ({ moduleData }) => {
	const [allWis,setWis] = useState([]);

	const getData = async () =>{
		const {data : data} = await NgadiresoAPI.getAllWisata();
		setWis(data);
		// console.log(data);
	}

	useEffect(()=>{
		getData();
	},[]);

	const {
		jmbtWisata : jmbt,
		textWisata : text
	} = moduleData;

	return (
		<div>
			<Jumbotron
				mode="half"
				background={jmbt}
				type="secondary"
				height="min-h-[60vh]"
				paragraph={text}
				title="Hiburan & Wisata"
			/>
			<div className='px-10 my-10'>
				{allWis.map((e)=>(
					<div key = {e.slug}
					className='mb-4'>
						<Wis
						background={e.foto}
						title={e.nama}
						slug={e.slug}
						paragraph={e.deskripsi}/>
					</div>
				))}

			</div>
		</div>
	);
};

export default Wisata;
