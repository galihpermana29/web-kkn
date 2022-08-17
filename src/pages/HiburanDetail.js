import { useState,useEffect } from 'react';
import Jumbotron from '../components/Jumbotron';
import umbulan from '../assets/umbulan.png';
import NgadiresoAPI from "../utils/Endpoint";
import { useParams } from 'react-router-dom';

const HiburanDetail = () => {

	const param = useParams();
	const [bg,setBg] = useState('');
	const [dataWis,setData] = useState([]);
	const [img,setImg] = useState([]);
	const [faq,setFaq] = useState([]);
	const [isOpen, setOpen] = useState(null);

	const getData = async () =>{
		const{data : {
			data,
			gambar,
			faq
		}} = await NgadiresoAPI.getDetailWisata(param.slug);
		setBg(gambar[0].foto);
		setData(data);
		setImg(gambar);
		setFaq(faq);
	}
	
	useEffect(()=>{
		getData();
	},[]);
	const handleClickFaq = (id) => {
		setOpen(id);
	};
	console.log(faq);
	return (
		<div>
			<Jumbotron
				mode="half"
				type="secondary"
				paragraph=' '
				height="min-h-[60vh]"
				title="Tirta Umbulan"
				background={bg}
			/>
			<section className="px-5 lg:px-12 my-[50px] lg:my-[150px]">
				{dataWis.length !== 0 && (
					<div className='w-full overflow-x-auto flex'>
						{img.map((e)=>(
							<img className='max-h-[500px] max-w-ful' src={`${process.env.REACT_APP_ADMIN_URL}${e.foto}`} alt="umbulan" key={e.id}/>
						))}
					</div>
				)}

				<section className="mt-10 flex flex-col items-start lg:flex-row">
					<section className="w-full max-w-[300px]">
						<h1 className="text-xl font-bold my-5 text-greencus">Detail Informasi</h1>
						<ul>
							<li className='flex items-center mb-3'><span class="material-symbols-outlined mr-2 text-greencus">
									schedule
								</span> {dataWis.waktu}</li>
							<li className='flex items-center mb-3'><span class="material-symbols-outlined mr-2 text-greencus">
									location_on
								</span> {dataWis.alamat}</li>
							<li className='flex items-center mb-3'><span class="material-symbols-outlined mr-2 text-greencus">
									confirmation_number
								</span> {dataWis.tiket}</li>
						</ul>
					</section>
					<section>
						<div>
							<h1 className="text-xl font-bold my-5 text-greencus">Deskripsi Wisata</h1>
							<div dangerouslySetInnerHTML={{__html : dataWis.deskripsi}}/>
						</div>
						<div>
							<h1 className="text-xl font-bold my-5 text-greencus mt-10">FAQ</h1>
							<div className="mt-5 my-10">
								{faq.map((e,i)=>(
									<div
										className="border-b-2 w-full py-3 cursor-pointer"
										onClick={()=>{handleClickFaq(e.id)}}
										onBlur={()=>{handleClickFaq(null)}}>
										<div className='flex items-center'>
											<div className='flex text-white bg-greencus font-medium text-lg h-10 w-10 justify-center items-center mr-3'>{i+1}</div>
											<div>
												<h1 className="font-semibold text-lg">
													{e.quest}
												</h1>
											</div>
										</div>
										<p className={`${isOpen == e.id ? 'visible' : 'hidden'} ml-16 mt-3`}>
											{e.ans}
										</p>
									</div>
								))}
							</div>
							{dataWis.map.length>10 &&(
								<iframe
									src={dataWis.map}
									width="100%"
									height="450"
									allowFullScreen=""
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								/>
							)
							}
						</div>
						<div></div>
					</section>
				</section>
			</section>
		</div>
	);
};

export default HiburanDetail;
