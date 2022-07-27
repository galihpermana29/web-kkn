import { useParams } from 'react-router-dom';
import imageNews from '../assets/jumbotron-homepage.png';
import Cards from '../components/Card';
import { dummyNews } from './Homepage';
import NgadiresoAPI from '../utils/Endpoint';
import { useEffect, useState } from 'react';
import moment from 'moment';
const NewsDetail = () => {
	const [news, setNews] = useState([]);

	const { foto, text, judul, updated_at } = news ?? {};
	const { id } = useParams();

	const fetchDetailNews = async (id) => {
		const {
			data: { data = {} },
		} = await NgadiresoAPI.getDetailNews(id);
		setNews(data);
	};

	useEffect(() => {
		fetchDetailNews(id);
	}, []);
	return (
		<div className="lg:px-10 px-5 my-12 flex flex-col lg:flex-row items-center lg:items-start space-y-10 mt-[6rem] lg:space-x-7">
			<div className="lg:max-w-[75%] lg:min-w-[75%]">
				<div className="my-5">
					<h1 className="text-3xl font-bold mb-4 text-lime-800">{judul}</h1>
					<p>{moment(updated_at).format('MM/DD/YYYY')}</p>
				</div>

				<img src={imageNews} alt="pic-detail" className="w-full " />

				<p className="mt-10">{text}</p>
			</div>
			<div className="w-full">
				<h1 className="text-3xl font-bold mb-4">Berita Lainnya</h1>
				<div className="flex flex-wrap space-y-5 space-x-5 items-center justify-center lg:justify-start">
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

export default NewsDetail;
