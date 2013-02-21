;(function(window, document, undefined) {
	"use strict";

	var addCommas = function(nStr) {
		nStr += '';
		var x = nStr.split('.');
		var x1 = x[0];
		var x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + ',' + '$2');
		}
		return x1 + x2;
	};

	var buildSummary = function(data) {
		var content = '';
			content += '<div id="coderbits-summary">';
			content += '<div id="coderbits-avatar">';
			content += '<a href="' + data.link + '" target="_parent">';content += '<img alt="' + data.name + '" class="avatar" src="https://secure.gravatar.com/avatar/' + data.gravatar_hash + '?d=https%3A%2F%2Fcoderbits.com%2Fimages%2Fgravatar.png&r=PG&s=32">';
			content += '</a>';
			content += '</div>';
			content += '<div id="coderbits-overview">';
			content += '<h1>';
			content += '<a href="' + data.link + '" target="_parent" title="' + data.name + '">' + data.name + '</a>';
			content += '</h1>';
			content += '<p>';
			content += '<span>' + data.title + '</span>';
			content += '</p>';
			content += '</div>';
			content += '</div>';
		return content;
	}

	var request = function(url) {
		var script = document.getElementsByTagName("script")[0];
		var handler = document.createElement("script");
			handler.src = url;
		script.parentNode.insertBefore(handler, script);
	};

	var global = "coderbits";
	window[global] = function(data) {
		console.log(data);
		var content = '';
			content += buildSummary(data);
			//content += buildSkills(data);
			//content += buildStats(data);
			//content += buildBadges(data);
		document.getElementById(global).innerHTML = content;
		delete window[global];
	}

	var username = document.getElementById(global).getAttribute("data-coderbits-username");
	request("https://coderbits.com/" + username + ".json?callback=coderbits");
})(window, document);
