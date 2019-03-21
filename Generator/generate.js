var modifyProductionList = require("./initialise").modifyProductionList;
var [productions, nonTerminals, terminals] = modifyProductionList(
	require("../rules/grammar_input").grammar
);
var parseTable = require("./first").first(productions, nonTerminals, terminals);

printModifiedProductions(productions);

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

require("./print table").printParseTable(parseTable, terminals, nonTerminals);
