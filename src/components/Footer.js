import ig from '../assets/instagram.svg'
import tik from '../assets/tiktok.svg'
const Footer = () => {
	return (
		<div className="bg-blackcus py-[5rem]">
			<div className="flex-col justify-center">
				<h1 className="text-whitecus text-center text-xl font-semibold">Media Sosial Kami</h1>
				<div className="flex justify-center mt-3 mb-8">
					<a href="https://www.instagram.com/wisata.ngadireso/" target={"_blank"}>
						<img src={ig}/>
					</a>
					<a href='https://www.tiktok.com/@wisata.ngadireso' target={"_blank"}>
						<img src={tik}/>
					</a>
				</div>
				<p className="text-whitecus text-center text-sm">© KKN Filkom UB 2022 09 . All Rights Reserved</p>
			</div>
		</div>
	);
};

export default Footer;
