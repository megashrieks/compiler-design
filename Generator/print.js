function printModifiedProductions(lis) {
	console.log("===========================");
	console.log("\tPRODUCTIONS JSON");
	console.log("===========================");
	console.log();
	for (var i in lis) {
		console.log(i);
		console.log("first : ", lis[i]["first"]);
		console.log("follow : ", lis[i]["follow"]);
		var productions = lis[i]["productions"];
		for (var j = 0; j < productions.length; ++j)
			console.log(productions[j]);
		console.log();
	}
	console.log();
}
function printParseTableArray(parseTable, terminals, nonTerminals) {
	console.log(nonTerminals)
	console.log(terminals)

	console.log("[")
	for (var i in nonTerminals) {
		process.stdout.write("[");
		for (var j in terminals) {
			var ter = terminals[j];
			if (ter == "''")
				ter = "$";
			if (parseTable[nonTerminals[i]][ter] == "")
				console.log("\"\"");
			else if (parseTable[nonTerminals[i]][ter] == "sync")
				console.log("\"sync\"");
			else
				console.log(parseTable[nonTerminals[i]][ter]);
			if (j != terminals.length - 1) {
				process.stdout.write(",");
			}
		}
		process.stdout.write("]");
		if (i != nonTerminals.length - 1)
			process.stdout.write(",\n");
	}
	console.log("\n]")
}
function printParseTable(parseTable, terminals, nonTerminals) {
	console.log("===========================");
	console.log("\tPARSE TABLE LIST");
	console.log("===========================");
	console.log();
	for (var i in parseTable) {
		for (var j in parseTable[i]) {
			if (parseTable[i][j] != "")
				console.log(i, "\t", j, "\t", parseTable[i][j]);
		}
	}
	console.log();
}
function printFirst(productions) {
	console.log("===========================");
	console.log("\tFIRST");
	console.log("===========================");
	console.log();
	for (var i in productions) {
		console.log(i, " : ", productions[i].first);
	}
	console.log();
}
function printFollows(productions) {
	console.log("===========================");
	console.log("\tFOLLOWS");
	console.log("===========================");
	console.log();
	for (var i in productions) {
		console.log(i, " : ", productions[i].follow);
	}
	console.log();
}
module.exports = {
	printParseTable: printParseTable,
	printModifiedProductions: printModifiedProductions,
	printFirst: printFirst,
	printFollows: printFollows
};
