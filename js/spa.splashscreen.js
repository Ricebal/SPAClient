spa.splashscreen = (() => {
	var initModule, show, hide;

	initModule = () => {
		spa.router.showSplashScreen();
		// setTimeout(hide, 3000);
		hide();
	};


	show = () => {
		spa.router.showSplashScreen();
	};

	hide = (webpage = spa.router.showMainHTML) => {
		$('#loader-wrapper').fadeOut().queue(() => {webpage()});
	};

	return {
		initModule: initModule,
		show: show,
		hide: hide
	};
})();