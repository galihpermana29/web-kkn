import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Homepage from './pages/Homepage';
import LaporTamu from './pages/Lapor';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Penyuratan from './pages/Penyuratan';
import Sejarah from './pages/Sejarah';
import Wisata from './pages/Wisata';
function App() {
	return (
		<Router>
			<Navbar />
			<ScrollToTop />
			<Routes>
				<Route exact path="/" element={<Homepage />} />
				<Route path="/hiburan-wisata" element={<Wisata />} />
				<Route path="/sejarah" element={<Sejarah />} />
				<Route path="/kabar" element={<News />} />
				<Route path="/lapor-tamu" element={<LaporTamu />} />
				<Route path="/kabar/:id" element={<NewsDetail />} />
				<Route path="/penyuratan" element={<Penyuratan />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
