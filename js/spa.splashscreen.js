spa.splashscreen = (() => {
	var initModule = () => {
		spa.router.showSplashScreen();
		setTimeout(hide, 3000);
	};

	var hide = () => {
		$('#loader-wrapper').fadeOut().queue(() => {spa.router.showMainHTML()});
	};

	return {
		initModule: initModule
	};
})();