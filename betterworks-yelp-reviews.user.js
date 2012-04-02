// ==UserScript==
// @name           Betterworks.com yelp links 
// @description    Linking from Betterworks.com to Yelp search for reviews (code lifted from the Restaurant.com Yelp links script -http://userscripts.org/scripts/review/96836)
// @namespace    http://allen.alew.org
// @include        http://*.betterworks.com/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.js
// ==/UserScript==

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