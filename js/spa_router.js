var spa_router = (() => {

	var _configMap = {
		settable_map: {}
	},
	_stateMap = {container: null},
	_jqueryMap = {}

	var setJqueryMap = () => {
		var container = _stateMap.container;
		_jqueryMap = {
			page_container: $(container).find('.spa-shell-main-content')
		};
	};

	var showTestpage = () => {
		var html = spa_template
			.parseTemplate('features.test.test', {});
		_jqueryMap.page_container.html(html);
	};

	var showHomepage = () => {
		var html = spa_template
			.parseTemplate('features.homepage', {});
	};

	var initModule = (container) => {
		_stateMap.container = container;
		setJqueryMap();
		page.base('');
		page('/', showHomepage);
		page('/index.html', showHomepage);
		page('/login', showTestpage);
		page();

		return true;
	};

	return {
		initModule: initModule
	};
})();