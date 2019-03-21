/*
function printParseTable(parseTable, terminals, nonTerminals) {
	for (var i = 0; i < nonTerminals.length; ++i) {
		temp = nonTerminals[i];
		for (var j = 0; j < terminals.length; ++j)
			if (parseTable[nonTerminals[i]][terminals[j]] != "")
				console.log(
					nonTerminals[i],
					"\t",
					terminals[j],
					"\t",
					parseTable[nonTerminals[i]][terminals[j]]
				);
	}
}
*/
function printModifiedProductions(lis) {
	for (var i in lis) {
		console.log(i);
		console.log("first : ", lis[i]["first"]);
		// console.log("follow : ", lis[i]["follow"]);
		var productions = lis[i]["productions"];
		for (var j = 0; j < productions.length; ++j)
			console.log(productions[j]);
		console.log();
	}
}
// /*
function printParseTable(parseTable, terminals, nonTerminals) {
	for (var i = 0; i < terminals.length; ++i)
		process.stdout.write("\t|\t" + terminals[i]);

	var s = "-------";
	process.stdout.write("\n" + s + "-+");
	for (var i = 0; i < terminals.length; ++i)
		process.stdout.write(s + s + "-+");
	console.log();
	for (var i = 0; i < nonTerminals.length; ++i) {
		temp = nonTerminals[i];
		for (var j = 0; j < terminals.length; ++j)
			temp += "\t|\t" + parseTable[nonTerminals[i]][terminals[j]];
		console.log(temp);
	}
}
// */

module.exports = {
	printParseTable: printParseTable,
	printModifiedProductions: printModifiedProductions
};
