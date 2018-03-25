spa.hamburger = (() => {
	var initModule, openMenu, closeMenu;


	initModule = () => {
		$('#openMenu').click(() => {
			openMenu();
		});

		$('#closeMenu').click(() => {
			closeMenu();
		});
	}

	openMenu = () => {
		$('#nav').removeClass('slideLeft').addClass('slideRight');
	}

	closeMenu = () => {
		$('#nav').removeClass('slideRight').addClass('slideLeft');
	}

	return {
		initModule: initModule,
		openMenu: openMenu,
		closeMenu: closeMenu
	}
})();