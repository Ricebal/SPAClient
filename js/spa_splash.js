var splashScreen = ((wrapper_id) => {
	var wrapper_id = '#' + wrapper_id;

	var initModule = () => {
		// setTimeout(hide, 3000);
		hide();
	}

	var hide = () => {
		$(wrapper_id).fadeOut().delay(500).queue(function(){$(wrapper_id).remove()});
	}

	return {
		initModule: initModule
	}
})("loader-wrapper");