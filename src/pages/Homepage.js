import Jumbotron from '../components/Jumbotron';
import fotoTentangDesa from '../assets/tentang-desa.png';
import kades from '../assets/kades.png';
import jiwaLaki from '../assets/jiwa-pria.png';
import jiwaWanita from '../assets/jiwa-wanita.png';
import kk from '../assets/kk.png';
import { Link } from 'react-router-dom';
import Cards from '../components/Card';
import cardImage from '../assets/card-image.png';
import { useEffect, useState } from 'react';
import { sortNewsId } from '../utils/Func';
import style from '../style/style.module.css';

import NgadiresoAPI from '../utils/Endpoint';
import { CircularProgress } from '@mui/material';

export const dummyNews = [
	{
		id: 1,
		title: 'Panen Sukses Besar',
		description:
			'Ngadireso adalah sebuah desa di wilayah Kecamatan Poncokusumo Kabupaten Malang, Provinsi Jawa Timur. Kecamatan Poncokusumo',
		image: cardImage,
		date: '23 Januari 2020',
	},
	{
		id: 2,
		title: 'Acara 17 Agustusan',
		description:
			'Ngadireso adalah sebuah desa di wilayah Kecamatan Poncokusumo Kabupaten Malang, Provinsi Jawa Timur. Kecamatan Poncokusumo',
		image: cardImage,
		date: '9 Januari 2020',
	},
	{
		id: 3,
		title: 'Ulang Tahun Kades',
		description:
			'Ngadireso adalah sebuah desa di wilayah Kecamatan Poncokusumo Kabupaten Malang, Provinsi Jawa Timur. Kecamatan Poncokusumo',
		image: cardImage,
		date: '29 Januari 2020',
	},
	{
		id: 4,
		title: 'Ulang Tahun Kades',
		description:
			'Ngadireso adalah sebuah desa di wilayah Kecamatan Poncokusumo Kabupaten Malang, Provinsi Jawa Timur. Kecamatan Poncokusumo',
		image: cardImage,
		date: '29 Januari 2020',
	},
	{
		id: 5,
		title: 'Ulang Tahun Kades',
		description:
			'Ngadireso adalah sebuah desa di wilayah Kecamatan Poncokusumo Kabupaten Malang, Provinsi Jawa Timur. Kecamatan Poncokusumo',
		image: cardImage,
		date: '29 Januari 2020',
	},
];

const Homepage = ({ moduleData }) => {
	const {
		imgKades,
		imgTentangDesa,
		jumbotron,
		jmlPenduduk,
		jmlPria,
		jmlWanita,
		namaKades,
		sambutanKades,
		tentangDesa,
		jmbtWisata
	} = moduleData;
	const [news, setNews] = useState([]);
	const getAllDataNews = async () => {
		const {data} = await NgadiresoAPI.getAllNews();
		setNews(sortNewsId(data));
	};

	useEffect(() => {
		getAllDataNews();
	},[]);
	console.log(news)
	return (
		<div>
			<Jumbotron background={jumbotron} mode="full" bgfixed type='main' height="min-h-[100vh]" />
			{/* section desa */}
			<section className="flex flex-col-reverse lg:flex-row lg:justify-between items-center py-10 bg-[#0B130F]">
				<div className="text-white px-12 lg:min-w-[500px] max-w-[700px]">
					<h1 className="text-3xl font-bold mb-4">Tentang Desa</h1>
					<div className="text-justify" dangerouslySetInnerHTML={{__html : tentangDesa}}/>
				</div>
				<img
					src={`${process.env.REACT_APP_ADMIN_URL}${imgTentangDesa}`}
					alt="tentang desa"
					className="mb-10 px-12 lg:-mb-24 lg:px-0 w-full max-w-[500px] md:max-w-[600px]"
				/>
			</section>
			{/* section kades */}
			<section className="flex flex-col-reverse lg:flex-row-reverse lg:justify-center items-center lg:py-20 py-10 bg-[#F5F5F5]">
				<div className="px-12 lg:min-w-[500px] max-w-[700px] w-full">
					<h1 className="text-3xl font-bold mb-4">"</h1>
					<p className="text-justify" dangerouslySetInnerHTML={{__html : sambutanKades}}/>
					<div className="mt-10">
						<h1 className="text-3xl text-[#3B653E]">{namaKades}</h1>
						<p>Kepala Desa</p>
					</div>
				</div>
				<div className={`relative ${style.imgkades}`}>
					<img
						src={`${process.env.REACT_APP_ADMIN_URL}${imgKades}`}
						alt="tentang desa"
						className={`mb-10 px-12 lg:mb-0 lg:px-0 w-full max-w-[400px]`}
					/>
				</div>
			</section>

			{/* section statistik */}
			<Jumbotron
				height="min-h-[50vh]"
				mode="children"
				type="secondary"
				bgfixed
				background={jumbotron}>
				<div className=" flex flex-col relative space-y-10 py-10 lg:flex-row lg:space-y-0 lg:space-x-48">
					<div className="flex items-center flex-col lg:flex-row">
						<img src={jiwaLaki} alt="laki" className="max-w-[80px]" />
						<div className="text-white text-center mt-2 ml-5 lg:text-left">
							<p className="font-bold text-3xl">{jmlPria}</p>
							<p>Jiwa Pria</p>
						</div>
					</div>
					<div className="flex items-center flex-col lg:flex-row">
						<img src={kk} alt="laki" className="max-w-[80px]" />
						<div className="text-white text-center mt-2 ml-5  lg:text-left">
							<p className="font-bold text-3xl">{jmlPenduduk}</p>
							<p>Jumlah Penduduk</p>
						</div>
					</div>
					<div className="flex items-center flex-col lg:flex-row">
						<img src={jiwaWanita} alt="laki" className="max-w-[80px]" />
						<div className="text-white text-center mt-2 ml-5  lg:text-left">
							<p className="font-bold text-3xl">{jmlWanita}</p>
							<p>Jiwa Wanita</p>
						</div>
					</div>
				</div>
			</Jumbotron>

			<div className="p-10">
				<Jumbotron
					height="min-h-[50vh]"
					mode="children"
					type="secondary"
					background={jmbtWisata}>
					<div className="flex flex-col items-center justify-center realtive z-10">
						<h1 className="text-[1.4rem] font-bold lg:text-[3rem] text-white max-w-[500px] mb-5">
							Kunjungi Wisata Desa Ngadireso!
						</h1>
						<div className="mx-5 bg-greencus py-2 px-3 text-white max-w-max">
							<Link to={'/hiburan-wisata'}>Lihat Wisata</Link>
						</div>
					</div>
				</Jumbotron>
			</div>

			<div className="px-10 my-12">
				<div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-10">
					<div>
						<h1 className="text-3xl text-greencus font-semibold">Berita Terkini</h1>
						<p className='text-blackcus'>Lihat berita terkini</p>
					</div>
					<Link to={'/kabar'} className="text-greencus text-sm lg:text-base font-medium mt-4 lg:mt-0">Lihat semua &rarr;</Link>
				</div>

				<section className="lg:px-10 my-12 flex justify-center items-center ">
					{news.length === 0 && (
						<div className="flex justify-center items-center w-full">
							<CircularProgress />
						</div>
					)}

					{news.length > 0 && (
						<div className="flex justify-center lg:justify-start flex-wrap lg:space-x-3 space-y-7 w-full">
							<div></div>
							{news.map((news,i) => {
								if(i>4){
									return false
								}else{
									return (
										<Cards
											title={news.judul}
											description={news.text}
											image={news.foto}
											date={news.updated_at}
											key={news.id}
											link={news.slug}
										/>
									)
								}
							})}
						</div>
					)}
				</section>
			</div>
		</div>
	);
};

export default Homepage;
