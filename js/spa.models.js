spa.videos = (() => {
	var videos = [],
		initModule,
		getVideos;

	initModule = () => {
		spa.data.initModule();
		spa.data.getJsonData().done((data) => {
			spa.widget.configModule('success');
			spa.widget.toggle('Getting json data successful');
			videos = data;
			spa.splashscreen.hide(spa.router.showVideosPage);
		}).fail(() => {
			spa.widget.configModule('error');
			spa.widget.toggle('Error getting json data');
			spa.splashscreen.hide(spa.router.showHomePage);
		});
	}

	getVideos = () => {
		return videos;
	}

	return {
		initModule: initModule,
		getVideos: getVideos
	}
})();