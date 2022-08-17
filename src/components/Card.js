import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import defaultImage from '../assets/defaultImg.png';

import { trimString } from '../utils/Func';

import moment from 'moment';
import { maxHeight } from '@mui/system';

const Cards = ({ image, title = '', description = '', date, link }) => {
	return (
		<Link to={`/kabar/${link}`}>
			<Card sx={{ maxWidth: 260, minWidth: 250, minHeight: 350,maxHeight:350 }} className="relative">
				<img
					src={`${process.env.REACT_APP_ADMIN_URL}${image}`}
					alt="pic-detail"
					className="w-full h-[200px] object-cover object-center"
				/>
				<CardContent>
					<h1 className="font-bold mb-2">{trimString(title, 20)}</h1>
					<Typography variant="body2" color="text.secondary">
						<div
						dangerouslySetInnerHTML={{__html : trimString(description, 50)}}
						className='max-h-16 text-ellipsis'/>
					</Typography>
				</CardContent>
				<CardActions className='flex items-center w-full justify-between mt-auto absolute bottom-0'>
					<p className='text-blackcus text-xs ml-2 opacity-80'>{moment(date).format('DD/MM/YYYY')}</p>
					<p className='text-greencus font-medium text-sm mr-2'>Baca Sekarang</p>
				</CardActions>
			</Card>
		</Link>
	);
};

export default Cards;
