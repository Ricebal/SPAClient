this["spa_templates"] = this["spa_templates"] || {};
this["spa_templates"]["templates"] = this["spa_templates"]["templates"] || {};
this["spa_templates"]["templates"]["features"] = this["spa_templates"]["templates"]["features"] || {};
this["spa_templates"]["templates"]["features"]["about"] = this["spa_templates"]["templates"]["features"]["about"] || {};
this["spa_templates"]["templates"]["features"]["about"]["about"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Who are we</h2>\r\n<h3>Our History</h3>\r\n<p>\r\n	We were founded in 2005. We are one of Silvermoon’s oldest raiding guilds, having raided every tier of content since Onyxia. \r\n	<br />\r\n	Over the years we have organised nearly 2500 mandatory raids with some members still here from the very start. Our members age ranges from 18 to 57 Years old.\r\n</p>\r\n\r\n<h3>Our Goal</h3>\r\n<p>\r\n	Is to clear all current encounters while they are current and relevant, while preserving our reputation as being one of the most successful guilds on Silvermoon. We want to have fun doing that, so if you feel the same way then please head on over to Apply and we hope to see you in game.\r\n</p>\r\n\r\n<h3>Guild Requirements</h3>\r\n<h4>What are we looking for from you?</h4>\r\n\r\n<p>\r\n	You must be aged 18 or above\r\n</p>\r\n\r\n<h4><i>Commitment</i></h4>\r\n<p>\r\n	We need folks to commit to 3 mandatory days a week – <b>Wednesday, Thursday and Sunday</b>\r\n	<br />\r\n	<b>Raid times</b> are between 19.15 - 23.00 server time\r\n	<br />\r\n	Raid invites go out at 19.15 and raid starts at 19.30\r\n	<br />\r\n	If you value personal gain over the success of the team\r\n	<br />\r\n	If you think of us as a place where you can learn your class\r\n	<br />\r\n	If you see us as a bus stop to the next guild, <b>then Winters Heart is not the guild for you.</b>\r\n	<br />\r\n	<b>If, however,</b> you think you are a team player who knows his class inside and out, who comes to raids prepared with the knowledge to suceed, then by all means continue reading.\r\n	<br />\r\n	We require exceptional people to be able to clear content while it is still current\r\n	<br />\r\n	We are not here to hold your hand, you must know the encounter before raid start\r\n</p>\r\n\r\n<h4><i>Communication</i></h4>\r\n<p>\r\n	Please, if you need a dictionary to understand this website, don’t apply.\r\n	<br />\r\n	You must be able to speak English, listening and comprehension as well.\r\n	<br />\r\n	You must be reachable. If we need to contact you, we will do so via in game mail, e-mail or whisper\r\n</p>\r\n\r\n<h4><i>Compliance</i></h4>\r\n<p>\r\n	We need you to maintain a certain level of focus during boss fights.\r\n	<br />\r\n	While this is a game we need mature cool heads.\r\n	<br />\r\n	We are an adults only guild, hence it is expected that you will behave like one during raids.\r\n	<br />\r\n	Knowing when to shut up and knowing when to take criticism will help take you far in life and also in guild\r\n</p>\r\n \r\n\r\n<h4><i>Out-of-game requirements:</i></h4>\r\n<p>\r\n	<ul>\r\n		<li>You apply to us, not several guilds at the same time.</li>\r\n		<li>A stable connection.</li>\r\n		<li>Install Mumble, a VoIP Client for Gaming , having a working microphone is essential.</li>\r\n		<li>Be active on our forums. Learn where to find things.</li>\r\n		<li>Read up on in-depth game/class mechanics and share the knowledge</li>\r\n	</ul>\r\n</p>\r\n<h4><i>In-game requirements:</i></h4>\r\n<p>\r\n	<ul>\r\n		<li>You are a level 110 character</li>\r\n		<li>Your character is fully gemmed and enchanted</li>\r\n		<li>You have the gear to participate in current content</li>\r\n		<li>You are willing to respec when needed</li>\r\n	</ul>\r\n</p>";
},"useData":true});
this["spa_templates"]["templates"]["features"]["game"] = this["spa_templates"]["templates"]["features"]["game"] || {};
this["spa_templates"]["templates"]["features"]["game"]["game"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
this["spa_templates"]["templates"]["features"]["homepage"] = this["spa_templates"]["templates"]["features"]["homepage"] || {};
this["spa_templates"]["templates"]["features"]["homepage"]["homepage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<img src=\""
    + this.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" class=\"image\"></img>";
},"useData":true});
this["spa_templates"]["templates"]["features"]["splashscreen"] = this["spa_templates"]["templates"]["features"]["splashscreen"] || {};
this["spa_templates"]["templates"]["features"]["splashscreen"]["splashscreen"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"loader-wrapper\">\r\n	<div id=\"loader\"></div>\r\n</div>";
},"useData":true});
this["spa_templates"]["templates"]["features"]["mainhtml"] = this["spa_templates"]["templates"]["features"]["mainhtml"] || {};
this["spa_templates"]["templates"]["features"]["mainhtml"]["mainhtml"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"container\">\r\n		\r\n	<header role=\"banner\">\r\n		<h1><span class=\"toggle open\" id=\"openMenu\">&#10052;</span> Winter's Heart</h1>\r\n	</header>\r\n		<nav id=\"nav\" role=\"navigation\">\r\n			<span class=\"toggle close\" id=\"closeMenu\">×</span>\r\n			<ul>\r\n				<li>\r\n					<a href=\"/\">Home</a>\r\n				</li>\r\n				<li>\r\n					<a href=\"/videos\">Videos</a>\r\n				</li>\r\n				<li>\r\n					<a href=\"/game\">Game</a>\r\n				</li>\r\n				<li>\r\n					<a href=\"/about\">About</a>\r\n				</li>\r\n			</ul>\r\n		</nav>\r\n\r\n	<section id=\"main-content\" role=\"main\">\r\n\r\n	</section>\r\n\r\n	<aside>\r\n		<h3>Rankings</h3>\r\n		<a href=\"https://wowprogress.com/\"><div id=\"realm\"></div></a>\r\n		<a href=https://wowprogress.com/><div id=\"europe\"></div></a>\r\n		<a href=https://wowprogress.com/><div id=\"world\"></div></a>\r\n	</aside>\r\n\r\n	<footer>\r\n		&#169; Nicander Mohrmann\r\n	</footer>\r\n		\r\n</div>";
},"useData":true});
this["spa_templates"]["templates"]["features"]["videos"] = this["spa_templates"]["templates"]["features"]["videos"] || {};
this["spa_templates"]["templates"]["features"]["videos"]["videos"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<h2>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\r\n<div class=\"videoWrapper\">\r\n	<iframe width=\"560\" height=\"315\" src=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n</div>\r\n<br />\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h1>Video's</h1>\r\n\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.videos : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});