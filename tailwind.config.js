/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			backgroundImage: {
				'homepage-image': "url('/public/assets/jumbotron-homepage.png')",
				'statistik-image': "url('/public/assets/jumbotron-statistik.png')",
				'kunjungi-image': "url('/public/assets/kunjungi.png')",
				'sejarah-image': "url('/public/assets/jumbotron-sejarah.png')",
				'news-image': "url('/public/assets/jumbotron-news.png')",
				'lapor-image': "url('/public/assets/jumbotron-lapor.png')",
			},
		},
	},
	plugins: [],
};
