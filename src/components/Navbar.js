import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

import logo from '../assets/logo.png';

const Navbar = () => {
	const [show, setShow] = useState(false);
	const [bg, setBg] = useState({ backgroundColor: '#0B130F', opacity: '0.48' });
	useEffect(()=>{
		// window.scroll = () => {
		// 	console.log(window.scrollY);
		// }
		// window.onscroll(()=>{
		// 	console.log(window.scrollY)
		// })
		window.addEventListener('scroll',()=>{
			if(window.scrollY > 50){
				setBg({ backgroundColor: '#0B130F', opacity: '1' })
			}else{
				setBg({ backgroundColor: '#0B130F', opacity: '0.48' })
			}
		})
	})
	const handleShowMenu = () => {
		setShow(!show);
	};


	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				className='py-2'
				position="fixed"
				sx={bg}>
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
					<div className="mx-5 hidden lg:block text-white">
						<Link to={'/faq'}>Faq</Link>
					</div>
				</Toolbar>
			</AppBar>

			<div
				className={`${
					show ? 'block' : 'hidden'
				} bg-whitecus w-[100vw] h-[100vh] flex flex-col justify-between items-start py-20 space-y-3 fixed z-[100] pr-10`}
				onClick={handleShowMenu}>
				<div className="flex flex-col space-y-5 ">
					<div className="mx-5 text-blackcus text-2xl border-b-2 max-w-max border-blackcus">
						<Link to={'/hiburan-wisata'}>Hiburan & Wisata</Link>
					</div>
					<div className="mx-5 text-blackcus text-2xl border-b-2 max-w-max border-blackcus">
						<Link to={'/sejarah'}>Sejarah</Link>
					</div>
					<div className="mx-5 text-blackcus text-2xl border-b-2 max-w-max border-blackcus">
						<Link to={'/kabar'}>Kabar</Link>
					</div>
					<div className="mx-5 text-blackcus text-2xl border-b-2 max-w-max border-blackcus">
						<Link to={'/penyuratan'}>Penyuratan</Link>
					</div>
					<div className="mx-5 text-blackcus text-2xl border-b-2 max-w-max border-blackcus">
						<Link to={'/faq'}>Faq</Link>
					</div>
				</div>
			</div>
		</Box>
	);
};

export default Navbar;
