/*
 * spa.js
 * Root namespace module
 */

/*jslint           browser : true,   continue : true,
 devel  : true,    indent : 2,       maxerr  : 50,
 newcap : true,     nomen : true,   plusplus : true,
 regexp : true,    sloppy : true,       vars : false,
 white  : true
 */
/*global $, spa */

var spa = (() => {
	'use strict';
	var initModule =(container) => {
		spa.template.initModule(window.spa_templates.templates);
		spa.router.initModule(container);
		spa.shell.initModule(container);
	};

	return { initModule: initModule };
})();

$(() => {
	spa.initModule($('#spa'));
});