import api from './Api';

export default {
	/**
	 *
	 * @param {('general' | 'parent' | 'teacher')} group
	 */

	getAllNews() {
		return api.get('/api/berita');
	},

	getDetailNews(id) {
		return api.get(`/api/berita/${id}`);
	},

	getPenyuratan() {
		return api.get(`/api/surat`);
	},
};
