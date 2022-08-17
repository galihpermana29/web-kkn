import { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Faq from './pages/Faq';
import HiburanDetail from './pages/HiburanDetail';
import Homepage from './pages/Homepage';
import LaporTamu from './pages/Lapor';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Penyuratan from './pages/Penyuratan';
import Sejarah from './pages/Sejarah';
import Wisata from './pages/Wisata';

import NgadiresoAPI from './utils/Endpoint';
function App() {
	const [moduleData, setModuleData] = useState({});
	async function fetchPropsForStyling() {
		const { data: dataEdit} = await NgadiresoAPI.getStylingEditor();
		setModuleData(dataEdit);
	}
	useEffect(() => {
		fetchPropsForStyling();
	}, []);
	
	return (
		<Router>
			<Navbar />
			<ScrollToTop />
			<Routes>
				<Route exact path="/" element={<Homepage moduleData={moduleData} />} />
				<Route
					path="/hiburan-wisata"
					element={<Wisata moduleData={moduleData} />}
				/>
				<Route
					path="/hiburan-wisata/:slug"
					element={<HiburanDetail moduleData={moduleData} />}
				/>
				<Route path="/sejarah" element={<Sejarah moduleData={moduleData} />} />
				<Route path="/kabar" element={<News moduleData={moduleData} />} />
				<Route path="/faq" element={<Faq moduleData={moduleData} />} />
				{/* <Route
					path="/lapor-tamu"
					element={<LaporTamu moduleData={moduleData} />}
				/> */}
				<Route
					path="/kabar/:id"
					element={<NewsDetail moduleData={moduleData} />}
				/>
				<Route
					path="/kabar"
					element={<News moduleData={moduleData} />}
				/>
				<Route
					path="/penyuratan"
					element={<Penyuratan moduleData={moduleData} />}
				/>
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
