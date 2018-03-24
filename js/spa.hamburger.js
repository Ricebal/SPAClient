spa.hamburger = (() => {

	var initModule = () => {
		$('#openMenu').click(() => {
			openMenu();
		});

		$('#closeMenu').click(() => {
			closeMenu();
		});
	}

	var openMenu = () => {
		$('#nav').removeClass('slideLeft').addClass('slideRight');
	}

	var closeMenu = () => {
		$('#nav').removeClass('slideRight').addClass('slideLeft');
	}

	return {
		initModule: initModule,
		openMenu: openMenu,
		closeMenu: closeMenu
	}
})();