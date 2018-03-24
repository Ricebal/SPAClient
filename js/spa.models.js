spa.videos = (() => {
	var videos = [];

	var initModule = () => {
		spa.data.initModule();
		console.log(spa.data.getJsonData());
		videos = spa.data.getJsonData();
	}

	var getVideos = () => {
		return videos;
	}

	return {
		initModule: initModule,
		getVideos: getVideos
	}
})();