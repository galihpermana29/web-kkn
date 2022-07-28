import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
	const [show, setShow] = useState(false);

	const handleShowMenu = () => {
		setShow(!show);
	};
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="fixed"
				sx={{ backgroundColor: '#0B130F', opacity: '0.48' }}>
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						<Link to={'/'}>Ngadireso</Link>
					</Typography>

					<div className="lg:hidden" onClick={handleShowMenu}>
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

			<div
				className={`${
					show ? 'block' : 'hidden'
				} bg-white w-[100vw] h-[100vh] flex flex-col justify-start items-start pt-20 space-y-3 border-2 fixed`}
				onClick={handleShowMenu}>
				<div className="mx-5 text-black text-2xl border-b-2 border-black">
					<Link to={'/hiburan-wisata'}>Hiburan & Wisata</Link>
				</div>
				<div className="mx-5 text-black text-2xl border-b-2 border-black">
					<Link to={'/sejarah'}>Sejarah</Link>
				</div>
				<div className="mx-5 text-black text-2xl border-b-2 border-black">
					<Link to={'/kabar'}>Kabar</Link>
				</div>
				<div className="mx-5 text-black text-2xl border-b-2 border-black">
					<Link to={'/penyuratan'}>Penyuratan</Link>
				</div>
				<div className="mx-5 bg-lime-800 py-2 px-3 text-white  text-2xl mt-12">
					<Link to={'/lapor-tamu'}>Lapor Tamu</Link>
				</div>
			</div>
		</Box>
	);
};

export default Navbar;
