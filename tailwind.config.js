/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			fontFamily:{
				'mons' : ['Montserrat','sans-serif'],
				'bungee' : ['Bungee','cursive'],
			},
			colors : {
				trans : 'transparent',
				blackcus : '#0B130F',
				greencus : '#3B653E',
				whitecus : '#F5F5F5',
			},
			backgroundImage: {
				'homepage-image': "url('/public/assets/jumbotron-homepage.png')",
				'statistik-image': "url('/public/assets/jumbotron-statistik.png')",
				'kunjungi-image': "url('/public/assets/kunjungi.png')",
				'sejarah-image': "url('/public/assets/jumbotron-sejarah.png')",
				'news-image': "url('/public/assets/jumbotron-news.png')",
				'lapor-image': "url('/public/assets/jumbotron-lapor.png')",
				'penyuratan-image': "url('/public/assets/jumbotron-penyuratan.png')",
			},
		},
	},
	plugins: [],
};
