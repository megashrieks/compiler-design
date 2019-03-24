const log = () => {};
function printModifiedProductions(lis) {
	log("===========================");
	log("\tPRODUCTIONS JSON");
	log("===========================");
	log();
	for (var i in lis) {
		log(i);
		log("first : ", lis[i]["first"]);
		log("follow : ", lis[i]["follow"]);
		var productions = lis[i]["productions"];
		for (var j = 0; j < productions.length; ++j) log(productions[j]);
		log();
	}
	log();
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
	log("===========================");
	log("\tPARSE TABLE LIST");
	log("===========================");
	log();
	for (var i in parseTable) {
		for (var j in parseTable[i]) {
			if (parseTable[i][j] != "") log(i, "\t", j, "\t", parseTable[i][j]);
		}
	}
	log();
}
function printFirst(productions) {
	log("===========================");
	log("\tFIRST");
	log("===========================");
	log();
	for (var i in productions) {
		log(i, " : ", productions[i].first);
	}
	log();
}
function printFollows(productions) {
	log("===========================");
	log("\tFOLLOWS");
	log("===========================");
	log();
	for (var i in productions) {
		log(i, " : ", productions[i].follow);
	}
	log();
}
module.exports = {
	printParseTable: printParseTable,
	printModifiedProductions: printModifiedProductions,
	printFirst: printFirst,
	printFollows: printFollows
};
