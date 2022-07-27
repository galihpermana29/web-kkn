import Jumbotron from '../components/Jumbotron';
import tentangDesa from '../assets/tentang-desa.png';
import kades from '../assets/kades.png';
import jiwaLaki from '../assets/jiwa-pria.png';
import jiwaWanita from '../assets/jiwa-wanita.png';
import kk from '../assets/kk.png';
import { Link } from 'react-router-dom';
import Cards from '../components/Card';
import cardImage from '../assets/card-image.png';

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

const Homepage = () => {
	return (
		<div>
			<Jumbotron mode="full" height="min-h-[100vh]" />
			{/* section desa */}
			<section className="flex flex-col-reverse lg:flex-row lg:justify-between items-center py-10 bg-[#0B130F]">
				<div className="text-white px-12 lg:min-w-[500px] max-w-[700px]">
					<h1 className="text-3xl font-bold mb-4">Tentang Desa</h1>
					<p>
						Ngadireso adalah sebuah desa di wilayah Kecamatan Poncokusumo,
						Kabupaten Malang, Provinsi Jawa Timur. Kecamatan Poncokusumo
						termasuk ke dalam kawasan agropolitan, yakni daerah pertanian
						berbasis wisata. <br /> <br /> Desa Ngadireso merupakan sebuah desa
						yang sejuk udaranya dengan kondisi alam perbukitan dan lembah nan
						elok di pandang mata, sumber mata air yang tiada putus-putusnya.
					</p>
				</div>
				<img
					src={tentangDesa}
					alt="tentang desa"
					className="mb-10 px-12 lg:mb-0 lg:px-0 w-full max-w-[500px] md:max-w-[600px]"
				/>
			</section>
			{/* section kades */}
			<section className="flex flex-col-reverse lg:flex-row-reverse lg:justify-center items-center lg:py-20 py-10 bg-[#F5F5F5]">
				<div className="px-12 lg:min-w-[500px] max-w-[700px] w-full">
					<h1 className="text-3xl font-bold mb-4">"</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
						velit nemo non, maiores, at laborum quia ea voluptatem earum cumque
						distinctio! Saepe, quae quidem. Nulla accusantium quae beatae
						impedit harum! Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Aperiam, in. Lorem ipsum dolor sit amet, consectetur
						adipisicing elit. Ratione consectetur nisi ex voluptate veniam
						ipsum.
					</p>
					<div className="mt-10">
						<h1 className="text-3xl text-[#3B653E]">Nur Salim</h1>
						<p>Kepala Desa</p>
					</div>
				</div>
				<img
					src={kades}
					alt="tentang desa"
					className="mb-10 px-12 lg:mb-0 lg:px-0 w-full max-w-[400px]"
				/>
			</section>

			{/* section statistik */}
			<Jumbotron
				height="min-h-[50vh]"
				mode="children"
				background="bg-statistik-image">
				<div className=" flex flex-col space-y-10 py-10 lg:flex-row lg:space-y-0 lg:space-x-10">
					<div className="flex items-center flex-col lg:flex-row">
						<img src={jiwaLaki} alt="laki" className="max-w-[80px]" />
						<div className="text-white text-center mt-2 ml-5 lg:text-left">
							<p className="font-bold text-3xl">213</p>
							<p>Jiwa Penduduk Pria</p>
						</div>
					</div>
					<div className="flex items-center flex-col lg:flex-row">
						<img src={kk} alt="laki" className="max-w-[80px]" />
						<div className="text-white text-center mt-2 ml-5  lg:text-left">
							<p className="font-bold text-3xl">213</p>
							<p>Kartu Keluarga</p>
						</div>
					</div>
					<div className="flex items-center flex-col lg:flex-row">
						<img src={jiwaWanita} alt="laki" className="max-w-[80px]" />
						<div className="text-white text-center mt-2 ml-5  lg:text-left">
							<p className="font-bold text-3xl">213</p>
							<p>Jiwa Penduduk Wanita</p>
						</div>
					</div>
				</div>
			</Jumbotron>

			<div className="p-10">
				<Jumbotron
					height="min-h-[50vh]"
					mode="children"
					background="bg-homepage-image">
					<div className="flex flex-col items-center justify-center">
						<h1 className="text-[1.4rem] font-bold lg:text-[3rem] text-white max-w-[500px] mb-5">
							Kunjungi Wisata Desa Ngadireso!
						</h1>
						<div className="mx-5 bg-lime-800 py-2 px-3 text-white max-w-max">
							<Link to={'/hiburan-wisata'}>Lihat Wisata</Link>
						</div>
					</div>
				</Jumbotron>
			</div>

			<div className="px-10 my-12">
				<div className="flex justify-between items-center mb-10">
					<div>
						<h1 className="text-3xl font-bold">Berita Terkini</h1>
						<p>Lihat berita terkini</p>
					</div>
					<Link to={'/kabar'}>Lihat semua -</Link>
				</div>
				<div className="flex justify-center overflow-x-scroll space-x-3 space-y-7">
					<div></div>
					{dummyNews.map((news) => (
						<Cards
							title={news.title}
							description={news.description}
							image={news.image}
							date={news.date}
							key={news.id}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Homepage;
