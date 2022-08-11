import { useState } from 'react';
import Jumbotron from '../components/Jumbotron';
import umbulan from '../assets/umbulan.png';

const HiburanDetail = () => {
	const [isOpen, setOpen] = useState(false);
	const handleClickFaq = () => {
		setOpen(!isOpen);
	};
	return (
		<div>
			<Jumbotron
				mode="half"
				height="min-h-[60vh]"
				paragraph="Wisata Air Tirta Umbulan Umbulan"
				title="Tirta Umbulan"
				background="bg-news-image"
			/>
			<section className="px-5 lg:px-12 my-[50px] lg:my-[150px]">
				<img src={umbulan} alt="umbulan" />

				<section className="mt-10 flex flex-col items-start lg:flex-row">
					<section className="w-full max-w-[300px]">
						<h1 className="text-3xl font-bold my-5">Detail Informasi</h1>
						<ul>
							<li>24 Jam</li>
							<li>Jalan Sudirman</li>
							<li>Gratis</li>
						</ul>
					</section>
					<section className="">
						<div>
							<h1 className="text-3xl font-bold my-5">Deskripsi Wisata</h1>
							<p>
								Tirta Umbulan merupakan sebuah wisata air yang terletak di Desa
								Ngadireso, Kecamatan Poncokusumo. Tirta Umbulan memiliki air
								yang jernih dan pemandangan alam yang indah. Sumber airnya juga
								berasal dari mata air alami dari bukit yang bernama pusung
								keris. Tirta Umbulan juga kuat akan cerita sejarah
								dibelakangnya. Sumber mata air ini dikisahkan ditemukan oleh
								Putri Sri Huning yang berasal dari kerajaan Tuban yang sedang
								menghindari peperangan yang terjadi di kerajaannya. Dipercaya
								air yang berada pada Tirta Umbulan dapat menjadi air penyembuhan
								untuk penyakit.
							</p>
						</div>
						<div>
							<h1 className="text-3xl font-bold mb-4 my-5">FAQ</h1>
							<div className="mt-5 my-10">
								<div
									className="border-b-2 max-w-max py-3 cursor-pointer"
									onClick={handleClickFaq}>
									<h1 className="text-xl font-bold">
										Bagaimana akses menuju lokasi?
									</h1>
									<p className={`${isOpen ? 'visible' : 'hidden'}`}>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Consequatur cum numquam nulla labore fugiat animi!
									</p>
								</div>
							</div>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.282177436315!2d112.77719921471244!3d-8.072675594187727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x68d17c7dfc0065df!2sMata%20Air%20Umbulan!5e0!3m2!1sen!2sid!4v1660221641471!5m2!1sen!2sid"
								width="100%"
								height="450"
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							/>
						</div>
						<div></div>
					</section>
				</section>
			</section>
		</div>
	);
};

export default HiburanDetail;
