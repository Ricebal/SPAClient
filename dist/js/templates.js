this["spa_templates"] = this["spa_templates"] || {};
this["spa_templates"]["templates"] = this["spa_templates"]["templates"] || {};
this["spa_templates"]["templates"]["features"] = this["spa_templates"]["templates"]["features"] || {};
this["spa_templates"]["templates"]["features"]["about"] = this["spa_templates"]["templates"]["features"]["about"] || {};
this["spa_templates"]["templates"]["features"]["about"]["about"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "About";
},"useData":true});
this["spa_templates"]["templates"]["features"]["game"] = this["spa_templates"]["templates"]["features"]["game"] || {};
this["spa_templates"]["templates"]["features"]["game"]["game"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "Game page";
},"useData":true});
this["spa_templates"]["templates"]["features"]["homepage"] = this["spa_templates"]["templates"]["features"]["homepage"] || {};
this["spa_templates"]["templates"]["features"]["homepage"]["homepage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"image\">"
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>";
},"useData":true});
this["spa_templates"]["templates"]["features"]["mainhtml"] = this["spa_templates"]["templates"]["features"]["mainhtml"] || {};
this["spa_templates"]["templates"]["features"]["mainhtml"]["mainhtml"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"container\">\r\n		\r\n	<header role=\"banner\">\r\n		<h1><span class=\"toggle open\" id=\"openMenu\">&#10052;</span> Winter's Heart</h1>\r\n	</header>\r\n		<nav id=\"nav\" role=\"navigation\">\r\n			<span class=\"toggle close\" id=\"closeMenu\">×</span>\r\n			<ul>\r\n				<li>\r\n					<a href=\"/\">Home</a>\r\n				</li>\r\n				<li>\r\n					<a href=\"/videos\">Videos</a>\r\n				</li>\r\n				<li>\r\n					<a href=\"/game\">Game</a>\r\n				</li>\r\n				<li>\r\n					<a href=\"/about\">About</a>\r\n				</li>\r\n			</ul>\r\n		</nav>\r\n\r\n	<section id=\"main-content\" role=\"main\">\r\n\r\n	</section>\r\n\r\n	<aside>\r\n		<h3>Aside</h3>\r\n	</aside>\r\n\r\n	<footer>\r\n		<h3>Footer</h3>\r\n	</footer>\r\n		\r\n</div>";
},"useData":true});
this["spa_templates"]["templates"]["features"]["videos"] = this["spa_templates"]["templates"]["features"]["videos"] || {};
this["spa_templates"]["templates"]["features"]["videos"]["videos"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "	<h2>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\r\n	<h3>"
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "</h3>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<h1>Video's</h1>\r\n\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.videos : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["spa_templates"]["templates"]["features"]["splashscreen"] = this["spa_templates"]["templates"]["features"]["splashscreen"] || {};
this["spa_templates"]["templates"]["features"]["splashscreen"]["splashscreen"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"loader-wrapper\">\r\n	<div id=\"loader\"></div>\r\n</div>";
},"useData":true});