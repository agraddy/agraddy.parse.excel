var xlsx = require('xlsx');

var mod = function(input) {
	var i;
	var j;
	var keys;
	var workbook = xlsx.read(input);

	var json = xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

	for(i = 0; i < json.length; i++) {
		keys = Object.keys(json[i]);
		for(j = 0; j < keys.length; j++) {
			json[i][keys[j].toLowerCase().replace(/ /g, '_')] = json[i][keys[j]];
			delete json[i][keys[j]];
		}
	}

	return json;
}

module.exports = mod;
