spa.data = (() =>{
	var _url,
		_timeout,
		initModule, getJsonData;

	initModule = () => {
		_url = "http://localhost:3000/video";
		_timeout = 5000;
	}

	getJsonData = () => {
		return $.ajax({ url: _url, timeout: _timeout });
	}

	return {
		initModule: initModule,
		getJsonData: getJsonData
	}
})();