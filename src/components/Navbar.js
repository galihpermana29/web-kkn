import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="fixed"
				sx={{ backgroundColor: '#0B130F', opacity: '0.48' }}>
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						<Link to={'/'}>Ngadireso</Link>
					</Typography>

					<div className="lg:hidden">
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}>
							<MenuIcon />
						</IconButton>
					</div>
					<div className="mx-5 hidden lg:block text-white">
						<Link to={'/hiburan-wisata'}>Hiburan & Wisata</Link>
					</div>
					<div className="mx-5 hidden lg:block text-white">
						<Link to={'/sejarah'}>Sejarah</Link>
					</div>
					<div className="mx-5 hidden lg:block text-white">
						<Link to={'/kabar'}>Kabar</Link>
					</div>
					<div className="mx-5 hidden lg:block text-white">
						<Link to={'/penyuratan'}>Penyuratan</Link>
					</div>
					<div className="mx-5 bg-lime-800 py-2 px-3 text-white hidden lg:block">
						<Link to={'/lapor-tamu'}>Lapor Tamu</Link>
					</div>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
