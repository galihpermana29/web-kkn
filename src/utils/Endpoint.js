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
	// getFAQ(id) {
	// 	return api.get(`/cms/faqs/${id}`, getAccessToken());
	// },
	// updateFAQ(id, faq) {
	// 	return api.put(`/cms/faqs/${id}`, { faq }, getAccessToken());
	// },
	// createFAQ(faq) {
	// 	return api.post('/cms/faqs', { faq }, getAccessToken());
	// },
	// deleteFAQ(id) {
	// 	return api.delete(`/cms/faqs/${id}`, getAccessToken());
	// },
};
