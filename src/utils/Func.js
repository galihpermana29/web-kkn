export let trimString = function (string, length) {
	return string.length > length ? string.substring(0, length) + '...' : string;
};

export let sortNewsId = (data)=>{
	return data.sort((first, second) => 0 - (first.updated_at > second.updated_at ? 1 : -1));
}