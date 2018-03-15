var spa = (() => {
	var initModule = (container) => {
		spa_shell.initModule(container);
	}

	return {
		initModule: initModule
	}
})();

var test = (() => {
	var hoi = "driehoek";

	var getHoi = () => {
		return hoi;
	};

	return {
		getHoi: getHoi
	}
})();

$(() => {
	spa.initModule('#spa');
});
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
spa_template = (() => {
//---------------- BEGIN MODULE SCOPE VARIABLES --------------
	var
		_configMap = {
			settable_map : { template_collection: true }
		},
		_stateMap = { template_collection : null };
//----------------- END MODULE SCOPE VARIABLES ---------------

//------------------- BEGIN PUBLIC METHODS -------------------

	// Arguments: A string divided by dots.
	var getTemplate = (template_path) => {
		return spa_util.fetchFromObject(_stateMap.template_collection, template_path);

	};

	// Arguments: A string and Object
	//  * String, path divided by dots.
	//  * Object, data which will be parsed.
	// Returns: String with html.
	var parseTemplate = (template_path, data) => {
		// debugger

		var template_func = spa_util.fetchFromObject(_stateMap.template_collection, template_path);
		return template_func(data);
	};

// Begin public method /configModule/
	var configModule = (input_map) => {
		spa_util.setConfigMap({
			input_map : input_map,
			settable_map : _configMap.settable_map,
			config_map : _configMap
		});
		return true;
	};
// End public method /configModule/

// Begin public method /initModule/
//
	var initModule = (template_collection) => {
		_stateMap.template_collection = template_collection;
		return true;
	};
// End public method /initModule/
// return public methods
	return {
		configModule : configModule,
		initModule : initModule,
		getTemplate: getTemplate,
		parseTemplate: parseTemplate
	};
//------------------- END PUBLIC METHODS ---------------------
})();
spa_util = (() => {
	var fetchFromObject = (obj, prop) => {

		if(typeof obj === 'undefined') {
			return false;
		}

		var _index = prop.indexOf('.');
		if(_index > -1) {
			return fetchFromObject(obj[prop.substring(0, _index)], prop.substr(_index + 1));
		}

		return obj[prop];
	};

	// Begin Public constructor /makeError/
	// Purpose: a convenience wrapper to create an error object
	// Arguments:
	//   * name_text - the error name
	//   * msg_text  - long error message
	//   * data      - optional data attached to error object
	// Returns  : newly constructed error object
	// Throws   : none
	//
	var makeError = ( name_text, msg_text, data ) => {
		var error     = new Error();
		error.name    = name_text;
		error.message = msg_text;

		if ( data ){ error.data = data; }

		return error;
	};
	// End Public constructor /makeError/

	// Begin Public method /setConfigMap/
	// Purpose: Common code to set configs in feature modules
	// Arguments:
	//   * input_map    - map of key-values to set in config
	//   * settable_map - map of allowable keys to set
	//   * config_map   - map to apply settings to
	// Returns: true
	// Throws : Exception if input key not allowed
	//
	var setConfigMap = ( arg_map ) => {
		var
			input_map    = arg_map.input_map,
			settable_map = arg_map.settable_map,
			config_map   = arg_map.config_map,
			key_name, error;

		for ( key_name in input_map ){
			if ( input_map.hasOwnProperty( key_name ) ){
				if ( settable_map.hasOwnProperty( key_name ) ){
					config_map[key_name] = input_map[key_name];
				}
				else {
					error = makeError( 'Bad Input',
						'Setting config key |' + key_name + '| is not supported'
					);
					throw error;
				}
			}
		}
	};
	// End Public method /setConfigMap/

	return {
		makeError    : makeError,
		setConfigMap : setConfigMap,
		fetchFromObject : fetchFromObject
	};
})();
