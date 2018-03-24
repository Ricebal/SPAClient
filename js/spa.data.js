spa.data = (() =>{
	var _url;
	var json;

	var initModule = () => {
		_url = "http://localhost:3000/video";
	}

	var getJsonData = () => {
		return $.ajax({ url: _url });
	}

	return {
		initModule: initModule,
		getJsonData: getJsonData
	}
})();