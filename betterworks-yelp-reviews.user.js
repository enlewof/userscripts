// ==UserScript==
// @name           Betterworks.com yelp links 
// @description    Linking from Betterworks.com to Yelp search for reviews (code lifted from the Restaurant.com Yelp links script -http://userscripts.org/scripts/review/96836)
// @namespace    http://allen.alew.org
// @include        http://*.betterworks.com/*
// @updateURL http://allen.alew.org/wp-content/uploads/2012/04/betterworks-yelp-reviews.user.js
// @version 1.2
// ==/UserScript==

// a function that loads jQuery and calls a callback function when jQuery has finished loading
function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

// main function  of this userscript
function main() {
	$(document).ready(function() {
		$(".PerkTitle").each(function() {
			var name = $("a", this).text().replace(/^\s+|\s+$/g, '');
			$(this).append("<a href='http://www.yelp.com/search?find_desc=" + encodeURIComponent(name).replace("'", "%27") +"'><img src='http://media1.px.yelpcdn.com/static/201012161623981098/i/ico/favicon.ico'/></a>");
		});
		$(".PerkContact > h2").each(function() {
			var name = $(this).text().replace(/^\s+|\s+$/g, '');
			$(this).append("<a href='http://www.yelp.com/search?find_desc=" + encodeURIComponent(name).replace("'", "%27") +"'><img src='http://media1.px.yelpcdn.com/static/201012161623981098/i/ico/favicon.ico'/></a>");
		});
	});
}
// load jQuery and execute the main function
addJQuery(main);
