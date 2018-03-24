this["spa_templates"] = this["spa_templates"] || {};
this["spa_templates"]["templates"] = this["spa_templates"]["templates"] || {};
this["spa_templates"]["templates"]["features"] = this["spa_templates"]["templates"]["features"] || {};
this["spa_templates"]["templates"]["features"]["homepage"] = this["spa_templates"]["templates"]["features"]["homepage"] || {};
this["spa_templates"]["templates"]["features"]["homepage"]["homepage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "Welkom "
    + this.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + " op de homepage!";
},"useData":true});
this["spa_templates"]["templates"]["features"]["login"] = this["spa_templates"]["templates"]["features"]["login"] || {};
this["spa_templates"]["templates"]["features"]["login"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "login...";
},"useData":true});
this["spa_templates"]["templates"]["features"]["mainhtml"] = this["spa_templates"]["templates"]["features"]["mainhtml"] || {};
this["spa_templates"]["templates"]["features"]["mainhtml"]["mainhtml"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"grid-container\">\r\n		<div class=\"grid-item1\">Winter's Heart</div>\r\n		<div class=\"grid-item2\">\r\n			<div class=\"nav-container\">\r\n				<input id=\"toggle\" type=\"checkbox\">\r\n				<label class=\"toggle-container\" for=\"toggle\">\r\n					<span class=\"button button-toggle\"></span>\r\n				</label>\r\n				<nav class=\"nav\">\r\n					<div class=\"nav-item nav-item1\"><a href=\"/\">Item 1</a></div>\r\n					<div class=\"nav-item nav-item2\"><a href=\"login\">Item 2</a></div>\r\n					<div class=\"nav-item nav-item3\">Item 3</div>\r\n					<div class=\"nav-item nav-item4\">Item lol</div>\r\n					<div class=\"nav-item nav-item5\">Item 5</div>\r\n				</nav>\r\n			</div>\r\n		</div>\r\n		<div class=\"grid-item3\">Main</div>  \r\n		<div class=\"grid-item4\">Right</div>\r\n		<div class=\"grid-item5\">&copy; Nicander Mohrmann 2018</div>\r\n</div>";
},"useData":true});
this["spa_templates"]["templates"]["features"]["splashscreen"] = this["spa_templates"]["templates"]["features"]["splashscreen"] || {};
this["spa_templates"]["templates"]["features"]["splashscreen"]["splashscreen"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"loader-wrapper\">\r\n	<div id=\"loader\"></div>\r\n</div>";
},"useData":true});