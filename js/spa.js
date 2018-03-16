var spa = (() => {
	var initModule = (container) => {
		spa_shell.initModule(container);
	}

	return {
		initModule: initModule
	}
})();

$(() => {
	spa.initModule('#spa');
});