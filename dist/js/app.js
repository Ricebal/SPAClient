'use strict';

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

var spa = function () {
  'use strict';

  var initModule = function initModule(container) {
    spa.template.initModule(window.spa_templates.templates);
    spa.router.initModule(container);
    spa.shell.initModule(container);
  };

  return { initModule: initModule };
}();

$(function () {
  spa.initModule($('#spa'));
});
/*
 * spa.util.js
 * General JavaScript utilities
 *
 * Michael S. Mikowski - mmikowski at gmail dot com
 * These are routines I have created, compiled, and updated
 * since 1998, with inspiration from around the web.
 *
 * MIT License
 *
*/

/*jslint          browser : true,  continue : true,
  devel  : true,  indent  : 2,     maxerr   : 50,
  newcap : true,  nomen   : true,  plusplus : true,
  regexp : true,  sloppy  : true,  vars     : false,
  white  : true
*/
/*global $, spa */

spa.util = function () {
  var makeError, _fetchFromObject, setConfigMap;

  _fetchFromObject = function fetchFromObject(obj, prop) {

    if (typeof obj === 'undefined') {
      return false;
    }

    var _index = prop.indexOf('.');
    if (_index > -1) {
      return _fetchFromObject(obj[prop.substring(0, _index)], prop.substr(_index + 1));
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
  makeError = function makeError(name_text, msg_text, data) {
    var error = new Error();
    error.name = name_text;
    error.message = msg_text;

    if (data) {
      error.data = data;
    }

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
  setConfigMap = function setConfigMap(arg_map) {
    var input_map = arg_map.input_map,
        settable_map = arg_map.settable_map,
        config_map = arg_map.config_map,
        key_name,
        error;

    for (key_name in input_map) {
      if (input_map.hasOwnProperty(key_name)) {
        if (settable_map.hasOwnProperty(key_name)) {
          config_map[key_name] = input_map[key_name];
        } else {
          error = makeError('Bad Input', 'Setting config key |' + key_name + '| is not supported');
          throw error;
        }
      }
    }
  };
  // End Public method /setConfigMap/

  return {
    makeError: makeError,
    setConfigMap: setConfigMap,
    fetchFromObject: _fetchFromObject
  };
}();

/**
 * spa.util_b.js
 * JavaScript browser utilities
 *
 * Compiled by Michael S. Mikowski
 * These are routines I have created and updated
 * since 1998, with inspiration from around the web.
 * MIT License
*/

/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/
/*global $, spa, getComputedStyle */

spa.util_b = function () {
  'use strict';
  //---------------- BEGIN MODULE SCOPE VARIABLES --------------

  var _configMap = {
    regex_encode_html: /[&"'><]/g,
    regex_encode_noamp: /["'><]/g,
    html_encode_map: {
      '&': '&#38;',
      '"': '&#34;',
      "'": '&#39;',
      '>': '&#62;',
      '<': '&#60;'
    }
  },
      decodeHtml,
      encodeHtml,
      getEmSize,
      decodeArrayFromURIString;

  _configMap.encode_noamp_map = $.extend({}, _configMap.html_encode_map);
  delete _configMap.encode_noamp_map['&'];
  //----------------- END MODULE SCOPE VARIABLES ---------------

  //------------------- BEGIN UTILITY METHODS ------------------
  // Begin decodeHtml
  // Decodes HTML entities in a browser-friendly way
  // See http://stackoverflow.com/questions/1912501/\
  //   unescape-html-entities-in-javascript
  //
  decodeHtml = function decodeHtml(str) {
    return $('<div/>').html(str || '').text();
  };
  // End decodeHtml


  // Begin encodeHtml
  // This is single pass encoder for html entities and handles
  // an arbitrary number of characters
  //
  encodeHtml = function encodeHtml(input_arg_str, exclude_amp) {
    var input_str = String(input_arg_str),
        regex,
        lookup_map;

    if (exclude_amp) {
      lookup_map = _configMap.encode_noamp_map;
      regex = _configMap.regex_encode_noamp;
    } else {
      lookup_map = _configMap.html_encode_map;
      regex = _configMap.regex_encode_html;
    }
    return input_str.replace(regex, function (match, name) {
      return lookup_map[match] || '';
    });
  };
  // End encodeHtml

  // Begin getEmSize
  // returns size of ems in pixels
  //
  getEmSize = function getEmSize(elem) {
    return Number(getComputedStyle(elem, '').fontSize.match(/\d*\.?\d*/)[0]);
  };
  // End getEmSize

  // Begin decodeArrayToURIComponent
  decodeArrayFromURIString = function decodeArrayFromURIString(uriString) {
    var result_array = [],
        parsed_uri_string,
        parsed_uri_string_keys;

    parsed_uri_string = JSON.parse('{"' + decodeURI(uriString).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"').replace(/\s/g, '') + '"}');
    parsed_uri_string_keys = Object.keys(parsed_uri_string); // ["cart[0][id]"]
    for (var i = 0; i < parsed_uri_string_keys.length; i++) {
      var _key, _index, _value;
      _index = parseInt(parsed_uri_string_keys[i].split('[')[1].slice(0, -1));
      _key = parsed_uri_string_keys[i].split('][')[1].slice(0, -1);
      _value = parsed_uri_string[parsed_uri_string_keys[i]];
      if (result_array.length === 0 || result_array.length <= _index) {
        result_array.push({});
      }

      result_array[_index][_key] = _value;
    }
    return result_array;
  };
  // End encodeArrayToURIComponent

  // export methods
  return {
    decodeHtml: decodeHtml,
    encodeHtml: encodeHtml,
    getEmSize: getEmSize,
    decodeArrayFromURIString: decodeArrayFromURIString
  };
  //------------------- END PUBLIC METHODS ---------------------
}();

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
spa.router = function () {
  //---------------- BEGIN MODULE SCOPE VARIABLES --------------
  var configMap = {
    settable_map: {}
  },
      stateMap = { container: null },
      jqueryMap = {},
      setJqueryMap,
      showAboutPage,
      showHomepage,
      showSplashScreen,
      showMainHTML,
      showGamePage,
      showVideosPage,
      configModule,
      initModule;
  //----------------- END MODULE SCOPE VARIABLES ---------------


  //------------------- BEGIN UTILITY METHODS ------------------
  // example : getTrimmedString
  //-------------------- END UTILITY METHODS -------------------


  //--------------------- BEGIN DOM METHODS --------------------
  // Begin DOM method /setJqueryMap/
  setJqueryMap = function setJqueryMap() {
    var container = stateMap.container;
    jqueryMap = {
      $page_container: container.find('.spa-shell-main-content')
    };
  };

  showAboutPage = function showAboutPage() {
    var html = spa.template.parseTemplate('features.about.about', {});
    $('#main-content').html(html);

    spa.hamburger.closeMenu();
  };

  showVideosPage = function showVideosPage() {
    spa.videos.initModule();
    var html = spa.template.parseTemplate('features.videos.videos', { videos: spa.videos.getVideos() });
    $('#main-content').html(html);

    spa.hamburger.closeMenu();
  };

  showGamePage = function showGamePage() {
    var html = spa.template.parseTemplate('features.game.game', {});
    $('#main-content').html(html);

    spa.hamburger.closeMenu();
  };

  showHomepage = function showHomepage() {

    var html = spa.template.parseTemplate('features.homepage.homepage', {});
    $('#main-content').html(html);

    spa.hamburger.closeMenu();
  };

  showSplashScreen = function showSplashScreen() {
    var html = spa.template.parseTemplate('features.splashscreen.splashscreen', {});
    $('#spa').html(html);
  };

  showMainHTML = function showMainHTML() {
    var html = spa.template.parseTemplate('features.mainhtml.mainhtml', {});
    $('#spa').html(html);

    setJqueryMap();
    spa.hamburger.initModule();
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
  configModule = function configModule(input_map) {
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
  initModule = function initModule(container) {
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
    page('/videos', showVideosPage);
    page({ hashbang: true });

    return true;
  };

  // End public method /initModule/
  // return public methods
  return {
    configModule: configModule,
    initModule: initModule,
    showSplashScreen: showSplashScreen,
    showMainHTML: showMainHTML
  };
  //------------------- END PUBLIC METHODS ---------------------
}();
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

spa.shell = function () {
  'use strict';

  //---------------- BEGIN MODULE SCOPE VARIABLES --------------

  var _configMap = {},
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
  setJqueryMap = function setJqueryMap() {
    var container = _stateMap.container;
    _jqueryMap = {
      container: container,
      $nav: container.find('.spa-shell-main-nav')
    };
  };
  // End DOM method /setJqueryMap/


  //--------------------- END DOM METHODS ----------------------

  //------------------- BEGIN PUBLIC METHODS -------------------
  initModule = function initModule(container) {
    _stateMap.container = container;
    spa.splashscreen.initModule();
  };

  return {
    initModule: initModule
  };
  //------------------- END PUBLIC METHODS ---------------------
}();
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
spa.template = function () {
  //---------------- BEGIN MODULE SCOPE VARIABLES --------------
  var _configMap = {
    settable_map: { template_collection: true }
  },
      _stateMap = { template_collection: null },
      getTemplate,
      parseTemplate,
      configModule,
      initModule;
  //----------------- END MODULE SCOPE VARIABLES ---------------

  //------------------- BEGIN PUBLIC METHODS -------------------

  // Arguments: A string divided by dots.
  getTemplate = function getTemplate(template_path) {
    return spa.util.fetchFromObject(_stateMap.template_collection, template_path);
  };

  // Arguments: A string and Object
  //  * String, path divided by dots.
  //  * Object, data which will be parsed.
  // Returns: String with html.
  parseTemplate = function parseTemplate(template_path, data) {
    var template_func = spa.util.fetchFromObject(_stateMap.template_collection, template_path);
    return template_func(data);
  };

  // Begin public method /configModule/
  configModule = function configModule(input_map) {
    spa.butil.setConfigMap({
      input_map: input_map,
      settable_map: _configMap.settable_map,
      config_map: _configMap
    });
    return true;
  };
  // End public method /configModule/

  // Begin public method /initModule/
  //
  initModule = function initModule(template_collection) {
    _stateMap.template_collection = template_collection;
    return true;
  };
  // End public method /initModule/
  // return public methods
  return {
    configModule: configModule,
    initModule: initModule,
    getTemplate: getTemplate,
    parseTemplate: parseTemplate
  };
  //------------------- END PUBLIC METHODS ---------------------
}();
spa.data = function () {
  var _url;

  var initModule = function initModule() {
    _url = "http://localhost:3000/video";
  };

  var getJsonData = function getJsonData() {
    $.ajax({ url: _url }).done(function (data) {
      return data;
    });
  };

  return {
    initModule: initModule,
    getJsonData: getJsonData
  };
}();
spa.hamburger = function () {

  var initModule = function initModule() {
    $('#openMenu').click(function () {
      openMenu();
    });

    $('#closeMenu').click(function () {
      closeMenu();
    });
  };

  var openMenu = function openMenu() {
    $('#nav').removeClass('slideLeft').addClass('slideRight');
  };

  var closeMenu = function closeMenu() {
    $('#nav').removeClass('slideRight').addClass('slideLeft');
  };

  return {
    initModule: initModule,
    openMenu: openMenu,
    closeMenu: closeMenu
  };
}();
spa.videos = function () {
  var videos = [];

  var initModule = function initModule() {
    spa.data.initModule();
    console.log(spa.data.getJsonData());
    videos = spa.data.getJsonData();
  };

  var getVideos = function getVideos() {
    return videos;
  };

  return {
    initModule: initModule,
    getVideos: getVideos
  };
}();
spa.splashscreen = function () {
  var initModule = function initModule() {
    spa.router.showSplashScreen();
    // setTimeout(hide, 3000);
    hide();
  };

  var hide = function hide() {
    $('#loader-wrapper').fadeOut().queue(function () {
      spa.router.showMainHTML();
    });
  };

  return {
    initModule: initModule
  };
}();