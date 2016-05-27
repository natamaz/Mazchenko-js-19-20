"use strict"
$.getJSON("https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json",

	function(dataSkills){
		dataSkills = _.union(_.flattenDepth(_.map(dataSkills, 'skills'))).sort();
		var res = dataSkills;
		console.log(dataSkills);
	});
	
$.getJSON("https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json",

	function(dataName){
		dataName = _.map(_.sortBy(dataName, function (obj){return obj.friends.length;}), 'name');
		var res = dataName;
		console.log(dataName);
	});	
	
$.getJSON("https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json",

	function(dataFriends){
		dataFriends = _.uniq(_.map(_.flattenDeep(_.map(dataFriends,'friends')),'name')).sort();
		var res = dataFriends;
		console.log(dataFriends);
	});		
	
	
