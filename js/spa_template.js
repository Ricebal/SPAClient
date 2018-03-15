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