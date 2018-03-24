spa.splashscreen = (() => {
	var initModule = () => {
		spa.router.showSplashScreen();
		// setTimeout(hide, 3000);
		hide();
	};

	var show = () => {
		spa.router.showSplashScreen();
	};

	var hide = (webpage = spa.router.showMainHTML) => {
		$('#loader-wrapper').fadeOut().queue(() => {webpage()});
	};

	return {
		initModule: initModule,
		show: show,
		hide: hide
	};
})();