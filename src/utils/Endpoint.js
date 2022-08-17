import api from './Api';

export default {
	/**
	 *
	 * @param {('general' | 'parent' | 'teacher')} group
	 */

	getAllNews() {
		return api.get('/api/berita');
	},
	getAllWisata() {
		return api.get('/api/wisata');
	},
	getDetailWisata(slug) {
		return api.get(`/api/wisata/${slug}`);
	},

	getDetailNews(id) {
		return api.get(`/api/berita/${id}`);
	},
	getFaq(id) {
		return api.get(`/api/faq`);
	},

	getPenyuratan() {
		return api.get(`/api/dokumen`);
	},

	getStylingEditor() {
		return api.get('/api/edit');
	},
};
