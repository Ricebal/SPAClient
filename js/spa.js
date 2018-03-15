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