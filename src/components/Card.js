import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import defaultImage from '../assets/defaultImg.png';

import { trimString } from '../utils/Func';

import moment from 'moment';

const Cards = ({ image, title = '', description = '', date, link = 0 }) => {

	return (
		<Link to={`/kabar/${link}`}>
			<Card sx={{ maxWidth: 260, minWidth: 250, minHeight: 270 }}>
				<img
					src={defaultImage}
					alt="pic-detail"
					className="w-full max-h-[150px]"
				/>
				<CardContent>
					<h1 className="font-bold mb-2">{trimString(title, 20)}</h1>
					<Typography variant="body2" color="text.secondary">
						{trimString(description, 50)}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">{moment(date).format('MM/DD/YYYY')}</Button>
				</CardActions>
			</Card>
		</Link>
	);
};

export default Cards;
