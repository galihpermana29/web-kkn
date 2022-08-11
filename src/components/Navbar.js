import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import logo from '../assets/logo.png';

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
					<Typography
						variant="h6"
						component="div"
						sx={{
							flexGrow: 1,
							display: 'flex',
							alignItems: 'center',
						}}>
						<img
							src={logo}
							alt="logo"
							style={{ marginRight: '10px' }}
							width={'30px'}
						/>
						<Link to={'/'}>Desa Ngadireso</Link>
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
					<Link to={'/lapor-tamu'}>
						<div className="mx-5 bg-lime-800 py-2 px-3 text-white hidden lg:block">
							Lapor Tamu
						</div>
					</Link>
				</Toolbar>
			</AppBar>

			<div
				className={`${
					show ? 'block' : 'hidden'
				} bg-white w-[100vw] h-[100vh] flex flex-col justify-between items-start py-20 space-y-3 fixed pr-10`}
				onClick={handleShowMenu}>
				<div className="flex flex-col space-y-5 ">
					<div className="mx-5 text-black text-2xl border-b-2 max-w-max border-black">
						<Link to={'/hiburan-wisata'}>Hiburan & Wisata</Link>
					</div>
					<div className="mx-5 text-black text-2xl border-b-2 max-w-max border-black">
						<Link to={'/sejarah'}>Sejarah</Link>
					</div>
					<div className="mx-5 text-black text-2xl border-b-2 max-w-max border-black">
						<Link to={'/kabar'}>Kabar</Link>
					</div>
					<div className="mx-5 text-black text-2xl border-b-2 max-w-max border-black">
						<Link to={'/penyuratan'}>Penyuratan</Link>
					</div>
				</div>
				<div className="mx-5 border-b-2 border-black w-full py-2 px-3 text-black text-2xl mt-12">
					<Link to={'/lapor-tamu'}>Lapor Tamu</Link>
				</div>
			</div>
		</Box>
	);
};

export default Navbar;
