function getYoutubeData(link, callback) {
	$.get(`https://api.vevioz.com/api/button/mp3/iiMrs3vOm_w/get?video=${link}`, async function (data) {
		if (typeof callback === "function") {
			callback(data);
		}
	});
}
