spa.videos = (() => {
	var videos = [];

	var initModule = () => {
		spa.data.initModule();
		spa.data.getJsonData().done((data) => {
			videos = data;
			spa.splashscreen.hide(spa.router.showVideosPage);
		});
	}

	var getVideos = () => {
		return videos;
	}

	return {
		initModule: initModule,
		getVideos: getVideos
	}
})();