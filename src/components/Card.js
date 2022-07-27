import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { trimString } from '../utils/Func';
const Cards = ({ image, title = '', description = '', date, link = 0 }) => {
	return (
		<Link to={`/kabar/${link}`}>
			<Card sx={{ maxWidth: 260, minWidth: 250, minHeight: 250 }}>
				<CardMedia
					component="img"
					alt="green iguana"
					height="140"
					image={`https://young-anchorage-84624.herokuapp.com${image}`}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{trimString(title, 20)}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{trimString(description, 60)}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small">{date}</Button>
					<Button size="small">Learn More</Button>
				</CardActions>
			</Card>
		</Link>
	);
};

export default Cards;
