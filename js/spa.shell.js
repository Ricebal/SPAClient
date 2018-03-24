/*
 * spa.shell.js
 * Shell module for SPA
 * master controller for our SPA
 */

/*jslint         browser : true, continue : true,
 devel  : true, indent  : 2,    maxerr   : 50,
 newcap : true, nomen   : true, plusplus : true,
 regexp : true, sloppy  : true, vars     : false,
 white  : true
 */
/*global $, spa */



spa.shell = (() => {
	'use strict';


	//---------------- BEGIN MODULE SCOPE VARIABLES --------------
	var
		_configMap = {},
		_stateMap = {
			container: undefined
		},
		_jqueryMap = {},

		setJqueryMap,
		initModule;
	//----------------- END MODULE SCOPE VARIABLES ---------------


	//------------------- BEGIN UTILITY METHODS ------------------
	//....
	//-------------------- END UTILITY METHODS -------------------


	//--------------------- BEGIN DOM METHODS --------------------
	setJqueryMap = () => {
		var container = _stateMap.container;
		_jqueryMap = {
			container: container,
			$nav: container.find('.spa-shell-main-nav')
		};
	};
	// End DOM method /setJqueryMap/


	//--------------------- END DOM METHODS ----------------------

	//------------------- BEGIN PUBLIC METHODS -------------------
	initModule = (container) => {
		_stateMap.container = container;
		spa.splashscreen.initModule();
	};

	return {
		initModule: initModule
	};
	//------------------- END PUBLIC METHODS ---------------------
})();