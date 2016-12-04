var fs = require("fs");
function submitBtnClicked() {
	// TODO: Store username and password in database
	console.log("-----------username=" + document.getElementById("userName").value);
	console.log("-----------username=" + document.getElementById("pwd").value);
}

function createGroupForm() {
	var loc = window.location.href;
	console.log("-----------------loc=" + loc);
	loc = loc.substr(0, loc.lastIndexOf("/") + 1)
	location.replace(loc + "createGroup.html");
}

function createGroup() {
	
}