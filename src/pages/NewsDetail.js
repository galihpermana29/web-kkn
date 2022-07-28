import { useParams } from 'react-router-dom';
import Cards from '../components/Card';
import { dummyNews } from './Homepage';
import NgadiresoAPI from '../utils/Endpoint';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { CircularProgress } from '@mui/material';
const NewsDetail = () => {
	const [news, setNews] = useState([]);

	const { detail = {}, news: allNews = [] } = news ?? {};
	const { foto, text, judul, updated_at } = detail ?? {};
	const { id } = useParams();

	const fetchDetailNews = async (id) => {
		const {
			data: { data = {} },
		} = await NgadiresoAPI.getDetailNews(id);

		const {
			data: { data: dataNews = {} },
		} = await NgadiresoAPI.getAllNews();

		setNews({ detail: data, news: dataNews });
	};

	useEffect(() => {
		fetchDetailNews(id);
	}, [id]);
	return (
		<div className="lg:px-10 px-5 my-12 flex flex-col min-h-[70vh] lg:flex-row items-center lg:items-start space-y-12 mt-[6rem] lg:space-x-7">
			<div className="lg:max-w-[75%] lg:min-w-[75%] w-full ">
				<div className="my-5">
					<h1 className="text-3xl font-bold mb-4 text-lime-800">{judul}</h1>
					<p>{moment(updated_at).format('MM/DD/YYYY')}</p>
				</div>

				<img
					src={`https://young-anchorage-84624.herokuapp.com${foto}`}
					alt="pic-detail"
					className="w-full"
				/>

				<p className="mt-10">{text}</p>
				{news.length === 0 && (
					<div className="w-full flex justify-center items-center min-h-[50vh]">
						<CircularProgress />
					</div>
				)}
			</div>
			<div className="w-full ">
				<h1 className="text-3xl font-bold mb-4">Berita Lainnya</h1>
				<div className="flex flex-wrap space-y-5 lg:space-x-5 items-center justify-center lg:justify-start">
					<div></div>
					{allNews.map((news) => (
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
			</div>
		</div>
	);
};

export default NewsDetail;
