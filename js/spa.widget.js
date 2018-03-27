spa.widget = (() => {
	var initModule, toggle, _id, configModule, getErrorLog,
		errorLog = [];

	initModule = (wrapperId) => {
		_id = wrapperId;
		$(_id).addClass('widget-error');
		$(_id).find('#widget-close').click(() => {
			toggle();
		});
	}

	configModule = (type = 'error') => {
		var classToAdd;
		switch (type){
			case 'error': 
				classToAdd = 'widget-error'
				break;
			case 'success': 
				classToAdd = 'widget-success'
				break;
			case 'info': 
				classToAdd = 'widget-info'
				break;
			case 'warning': 
				classToAdd = 'widget-warning'
				break;
			default: classToAdd = 'widget-error';
		}
		$(_id).removeClass();
		$(_id).addClass(classToAdd);
	}

	toggle = (message) => {
		if ($(_id).is(':visible')) {
			$(_id).fadeOut();
		} else {
			$(_id).find('#widget-text').html(message);
			$(_id).fadeIn();
			if(errorLog.length > 9){
				errorLog.shift();
			}
			errorLog.push(message);
			setTimeout(() => {$(_id).fadeOut();}, 5000);
		}
	}

	var getErrorLog = () => {
		return errorLog;
	}

	return {
		initModule: initModule,
		configModule: configModule,
		toggle: toggle,
		getErrorLog: getErrorLog
	}
})();