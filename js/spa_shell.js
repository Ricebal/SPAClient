var spa_shell = (() => {
	var _configMap = {},
		_stateMap = {
			container: undefined
		},
		_jqueryMap = {}

	var initModule = (container) => {
		spa_router.initModule(container);
		spa_template.initModule(window.spa_templates.templates);
		_stateMap.container = container;
		spa_splash.initModule();
	};

	var setJqueryMap = () => {
		var container = _stateMap.container;
		_jqueryMap = {
			container: container,
			nav: $(container).find('.spa-shell-main-nav')
		};
	};

	return {
		initModule: initModule
	};
})();