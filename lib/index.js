var xlsx = require('xlsx');

var mod = function(input) {
	var workbook = xlsx.read(input);

	return xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
}

module.exports = mod;
