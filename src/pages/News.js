import { useEffect, useState } from 'react';
import Cards from '../components/Card';
import Jumbotron from '../components/Jumbotron';
import NgadiresoAPI from '../utils/Endpoint';
import { CircularProgress } from '@mui/material';

const News = () => {
	const [news, setNews] = useState([]);

	const getAllDataNews = async () => {
		const {
			data: { data },
		} = await NgadiresoAPI.getAllNews();
		setNews(data);
	};

	useEffect(() => {
		getAllDataNews();
	}, []);

	return (
		<div>
			<Jumbotron
				mode="half"
				height="min-h-[60vh]"
				paragraph="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
				title="Kabar Berita"
				background="bg-news-image"
			/>

			<section className="px-10 my-12 min-h-[70vh] flex justify-center items-center">
				{news.length === 0 && (
					<div className="flex justify-center items-center w-full">
						<CircularProgress />
					</div>
				)}

				{news.length > 0 && (
					<div className="flex lg:justify-start justify-center flex-wrap space-x-3 space-y-7 w-full">
						<div></div>
						{news.map((news) => (
							<Cards
								title={news.judul}
								description={news.text}
								image={news.foto}
								date={news.updated_at}
								key={news.id}
								link={news.id}
							/>
						))}
					</div>
				)}
			</section>
		</div>
	);
};

export default News;
