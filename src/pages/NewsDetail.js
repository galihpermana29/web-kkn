import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cards from '../components/Card';
import { CircularProgress } from '@mui/material';
import { dummyNews } from './Homepage';
import { sortNewsId } from '../utils/Func';
import defaultImage from '../assets/defaultImg.png';

import NgadiresoAPI from '../utils/Endpoint';
import moment from 'moment';


const NewsDetail = () => {
	const [news, setNews] = useState([]);

	const { detail = {}, news: allNews = [] } = news ?? {};
	const { foto, text, judul, updated_at } = detail ?? {};
	const { id } = useParams();

	const fetchDetailNews = async (id) => {
		const {data : detailnews} = await NgadiresoAPI.getDetailNews(id);

		const { data: dataNews } = await NgadiresoAPI.getAllNews();

		setNews({ detail: detailnews, news: sortNewsId(dataNews)});
	};

	useEffect(() => {
		fetchDetailNews(id);
	}, [id]);
	console.log(news);
	return (
		<div className="lg:px-10 px-5 my-12 flex flex-col min-h-[70vh] lg:flex-row items-center lg:items-start space-y-12 mt-[6rem] lg:space-x-7">
			<div className="lg:max-w-[75%] lg:min-w-[75%] w-full ">
				<div className="my-5">
					<h1 className="text-3xl font-bold mb-4 text-greencus">{judul}</h1>
					<p className='text-blackcus font-medium'>{moment(updated_at).format('DD/MM/YYYY')}</p>
				</div>

				<img src={`${process.env.REACT_APP_ADMIN_URL}${foto}`} alt="pic-detail" className="max-w-full max-h-[800px] mx-auto object-cover object-center" />

				<div className="mt-10" dangerouslySetInnerHTML={{__html : text}}/>
				{news.length === 0 && (
					<div className="w-full flex justify-center items-center min-h-[50vh]">
						<CircularProgress />
					</div>
				)}
			</div>
			<div className="w-full ">
				<h1 className="lg:text-3xl text-xl font-bold mb-4">Berita Lainnya</h1>
				<div className="flex flex-wrap space-y-5 lg:space-x-5 items-center justify-center lg:justify-start">
					<div></div>
					{allNews.length === 0 && (
						<div className="flex justify-center items-center w-full">
							<CircularProgress />
						</div>
					)}
					{allNews.filter((n)=>{
						return n.id != news.detail.id
					}).map((news,i) => {
						if(i>4){
							return false
						}else{
							return(
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
			</div>
		</div>
	);
};

export default NewsDetail;
