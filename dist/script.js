function SplashScreen(wrapper_id){
	var id = '#' + wrapper_id;
	this.show = show;
	this.hide = hide;

	function show(){
		setTimeout(hide, 3000);
	}

	function hide(){
		$(id).fadeOut().delay(500).queue(function(){$(id).remove()});
	}
};

$(function(){
	var splashScreen = new SplashScreen("loader-wrapper");
	splashScreen.show();
	$('#toggle').prop('checked', true).delay(5000).queue(function(){$('#toggle').prop('checked', false)});
});