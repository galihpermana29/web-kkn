import { useEffect, useState } from 'react';
import Cards from '../components/Card';
import Jumbotron from '../components/Jumbotron';
import NgadiresoAPI from '../utils/Endpoint';
import { CircularProgress } from '@mui/material';
import { sortNewsId } from '../utils/Func';

const News = ({moduleData}) => {
	const {
		textKabar : text,
		jmbtKabar : jmbt
	} = moduleData;

	const [news, setNews] = useState([]);
	const [bg,setBg] = useState({});
	const getAllDataNews = async () => {
		const {data: data } = await NgadiresoAPI.getAllNews();
		setNews(sortNewsId(data));
	};

	useEffect(() => {
		getAllDataNews();
		setBg({
			text : text,
			jmbt : jmbt
		})
	}, []);
	return (
		<div>
			<Jumbotron
				mode="half"
				height="min-h-[60vh]"
				paragraph={bg.text}
				type="secondary"
				title="Kabar Berita"
				background={bg.jmbt}
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
