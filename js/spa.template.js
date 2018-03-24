/*
 * module_template.js
 * Template for browser feature modules
 */
/*jslint browser : true, continue : true,
 devel : true, indent : 2, maxerr : 50,
 newcap : true, nomen : true, plusplus : true,
 regexp : true, sloppy : true, vars : false,
 white : true
 */
/*global $, spa */
spa.template = (() => {
//---------------- BEGIN MODULE SCOPE VARIABLES --------------
    var
        _configMap = {
            settable_map : { template_collection: true }
        },
        _stateMap = { template_collection : null },
        getTemplate, parseTemplate, configModule, initModule;
//----------------- END MODULE SCOPE VARIABLES ---------------

//------------------- BEGIN PUBLIC METHODS -------------------

    // Arguments: A string divided by dots.
    getTemplate = (template_path) => {
        return spa.util.fetchFromObject(_stateMap.template_collection, template_path);

    };

    // Arguments: A string and Object
    //  * String, path divided by dots.
    //  * Object, data which will be parsed.
    // Returns: String with html.
    parseTemplate = (template_path, data) => {
        var template_func = spa.util.fetchFromObject(_stateMap.template_collection, template_path);
        return template_func(data);
    };

// Begin public method /configModule/
    configModule = (input_map) => {
        spa.butil.setConfigMap({
            input_map : input_map,
            settable_map : _configMap.settable_map,
            config_map : _configMap
        });
        return true;
    };
// End public method /configModule/

// Begin public method /initModule/
//
    initModule = (template_collection) => {
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