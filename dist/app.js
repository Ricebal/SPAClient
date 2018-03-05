var splashScreen = (function(wrapper_id){
	var wrapper_id = '#' + wrapper_id;

	var show = function(){
		// setTimeout(hide, 3000);
		hide();
	}

	var hide = function(){
		$(wrapper_id).fadeOut().delay(500).queue(function(){$(wrapper_id).remove()});
	}

	return {
		show: show
	}
})("loader-wrapper");

$(function(){
	splashScreen.show();
});