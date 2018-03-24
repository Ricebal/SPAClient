spa.data = (() =>{
	var _url;

	var initModule = () => {
		_url = "http://localhost:3000/video";
	}

	var getJsonData = () => {
		$.ajax({ url: _url } )
			.done((data) => {
				return data;
		});
	}

	return {
		initModule: initModule,
		getJsonData: getJsonData
	}
})();