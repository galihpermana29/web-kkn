import Jumbotron from '../components/Jumbotron';

const Sejarah = () => {
	return (
		<div>
			<Jumbotron
				mode="half"
				height="min-h-[60vh]"
				paragraph="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
				title="Sejarah"
				background="bg-sejarah-image"
			/>

			<section className="px-12 my-[150px] space-y-5">
				<section>
					<h1 className="text-3xl font-bold mb-5 text-[#3B653E]">
						Sejarah Desa Ngadireso
					</h1>
					<p className="text-justify">
						Sejarah awal mula berdirinya desa Ngadireso yang berada pada
						kecamatan Poncokusumo berawal dari seorang putri dari kerajaan di
						Tuban bernama Sri Huning, dia adalah anak angkat dari Adipati Tuban
						yang bernama adipati Ranggalawe. Putri Sri Huning pada saat itu
						melakukan perjalanan atau berkelana menuju daerah yang saat ini
						bernama desa Ngadireso, di daerah ini putri Sri Huning menemukan
						sebuah sumber mata air atau disebut dengan umbulan. Setelah usai
						berkelana putri Sri Huning memutuskan untuk kembali ke kerajaannya
						yang ada di Tuban, namun ternyata ketika ia berkelana ia mendapati
						kabar peperangan antara Kerajaan Bojonegoro dan Kerajaan Lamongan.
					</p>
					<br />
					<p className="text-justify">
						Peperangan ini bermula dari pernikahan anak dari adipati Ranggalawe
						yang bernama Wiratmoyo dengan putri dari kerajaan Bojonegoro bernama
						dewi Kumalaretno. Kerajaan Lamongan merasa di sepele kan karena
						kerajaan Bojonegoro menolak lamaran dari kerajaan lamongan dan
						akhirnya terjadi peperangan. Puri Sri Huning memutuskan untuk
						mengamankan diri kembali ke daerah yang telah ia temukan sebelumnya,
						dikawal oleh 2 pengawal setia nya yang bernama Ngadi dan Reso yang
						akhir nya mereka memutuskan untuk membuat tempat persembunyian yang
						akhirya dinamakan desa Ngadireso.
					</p>
				</section>

				<section>
					<h1 className="text-3xl font-bold mb-5 text-[#3B653E]">
						Sejarah Tirta Umbulan
					</h1>
					<p className="text-justify">
						Ketika kembali ke daerah yang sebelumnya sudah dijajaki oleh Sri
						Huning yang digunakan sebagai tempat persembunyiannya disana
						terdapat sumber mata air atau umbulan yang digunakan oleh putri Sri
						Huning untuk mandi. Di umubulan tersebut terdapat sebuah bukit yang
						bernama pusung keris. Dinama i pusung keris dikarenakan ada keris
						yang ditancapkan di sana yang digunakan sebagai tumbal untuk
						keselamatannya.
					</p>
					<br />
					<p className="text-justify">
						Umbulan tersebut dinamai Tirta Umbulan yang berasal dari kata Tirta
						yaitu air dan Umbulan yang berarti air yang menyembur keatas.
						Dipercaya air yang berada pada Tirta Umbulan dapat menjadi air
						penyembuhan untuk penyakit. Terdapat punden di dekat tirta umbulan
						punden tersebut dibangun sebagai tempat penghormatan untuk putri Sri
						Huning yang telah menemukan TIrta umbulan dan desa Ngadireso
					</p>
				</section>
			</section>
		</div>
	);
};

export default Sejarah;
