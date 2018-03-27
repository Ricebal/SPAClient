/*
 * router.js
 * Router module for interfacing between spa and page.js library.
 *
 * Requires pagejs. Pagejs fires the related callback when a route has been activated.
 * If no callback has been provided the router takes the default callback.
 *
 *
 */
/*jslint browser : true, continue : true,
 devel : true, indent : 2, maxerr : 50,
 newcap : true, nomen : true, plusplus : true,
 regexp : true, sloppy : true, vars : false,
 white : true
 */
/*global $, spa, page */
spa.router = (() => {
//---------------- BEGIN MODULE SCOPE VARIABLES --------------
	var
		configMap = {
			settable_map: {}
		},
		stateMap = {container: null},
		jqueryMap = {},
		setJqueryMap,
		showAboutPage,
		showHomepage,
		showSplashScreen,
		showMainHTML,
		showGamePage,
		showVideosPage,
		initVideosPage,
		configModule, initModule;
//----------------- END MODULE SCOPE VARIABLES ---------------


//------------------- BEGIN UTILITY METHODS ------------------
// example : getTrimmedString
//-------------------- END UTILITY METHODS -------------------


//--------------------- BEGIN DOM METHODS --------------------
// Begin DOM method /setJqueryMap/
	setJqueryMap = () => {
		var container = stateMap.container;
		jqueryMap = {
			$page_container: container.find('.spa-shell-main-content')
		};
	};

	showAboutPage = () => {
		var html = spa.template.parseTemplate('features.about.about', {});
		$('#main-content').html(html);
		$('#main-content').removeClass('homepage');
		$('aside').removeClass('homepage');

		spa.hamburger.closeMenu();
	};	

	initVideosPage = () => {
		spa.splashscreen.show();
		spa.videos.initModule();
	}

	showVideosPage = () => {
		showMainHTML();
		var html = spa.template.parseTemplate('features.videos.videos', {videos: spa.videos.getVideos()});
		$('#main-content').html(html);
		$('#main-content').removeClass('homepage');
		$('aside').removeClass('homepage');

		spa.hamburger.closeMenu();
	};

	showGamePage = () => {
		var html = spa.template
			.parseTemplate('features.game.game', {});
		$('#main-content').html(html);

		$('#main-content').removeClass('homepage');
		$('aside').removeClass('homepage');
		spa.game.startGame();
		spa.hamburger.closeMenu();
	}

	showHomepage = () => {

		var html = spa.template
			.parseTemplate('features.homepage.homepage', {url: 'images/landscape.jpg'});
		$('#main-content').html(html);

		$('#main-content').addClass('homepage');
		$('aside').addClass('homepage');

		spa.hamburger.closeMenu();
	};

 	showSplashScreen = () => {
		var html = spa.template
			.parseTemplate('features.splashscreen.splashscreen', {});
		$('#spa').html(html);
	};

	showMainHTML = () => {
		var html = spa.template
			.parseTemplate('features.mainhtml.mainhtml', {});
			$('#spa').html(html);

		setJqueryMap();
		spa.hamburger.initModule();

		showHomepage();
	};


// End DOM method /setJqueryMap/
//---------------------- END DOM METHODS ---------------------


//------------------- BEGIN EVENT HANDLERS -------------------
// example: onClickButton = ...
//-------------------- END EVENT HANDLERS --------------------


//------------------- BEGIN PUBLIC METHODS -------------------
// Begin public method /configModule/
// Purpose : Adjust configuration of allowed keys
// Arguments : A map of settable keys and values
// * color_name - color to use
// Settings :
// * configMap.settable_map declares allowed keys
// Returns : true
// Throws : none
//
	configModule = (input_map) => {
		spa.butil.setConfigMap({
			input_map: input_map,
			settable_map: configMap.settable_map,
			config_map: configMap
		});
		return true;
	};
	
// End public method /configModule/
// Begin public method /initModule/
// Purpose : Initializes module
// Arguments :
// * container the jquery element used by this feature
// Returns : true
// Throws : nonaccidental
//
	initModule = (container) => {
		stateMap.container = container;
		setJqueryMap();

		// the "notfound" implements a catch-all
		// with page('*', notfound). Here we have
		// no catch-all, so page.js will redirect
		// to the location of paths which do not
		// match any of the following routes
		// var baseUrl = 'file:///C:/Users/EB0095856/Documents/Projecten/client_upgrade/labs/spa_routing_templating/dist/index.html';
		page.base('');
		page('/', showHomepage);
		page('/index.html', showHomepage);
		page('/about', showAboutPage);
		page('/game', showGamePage);
		page('/videos', initVideosPage);
		page({hashbang: true});

		return true;
	};


// End public method /initModule/
// return public methods
	return {
		configModule: configModule,
		initModule: initModule,
		showSplashScreen: showSplashScreen,
		showMainHTML: showMainHTML,
		showGamePage: showGamePage,
		showVideosPage: showVideosPage,
		showAboutPage: showAboutPage,
		showHomepage: showHomepage
	};
//------------------- END PUBLIC METHODS ---------------------
})();