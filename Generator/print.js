const log = () => { };
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
	console.log("Non Terminals : ", nonTerminals)
	console.log("\nTerminals : ", terminals)


	console.log("\nParseTable")
	console.log("==========\n[")
	for (var i in nonTerminals) {
		process.stdout.write("[");
		var str = "";
		for (var j in terminals) {
			var ter = terminals[j];
			if (ter == "''")
				ter = "$";
			if (parseTable[nonTerminals[i]][ter] == "")
				str += "\"\"";
			else if (parseTable[nonTerminals[i]][ter] == "sync")
				str += "\"sync\"";
			else
				str += JSON.stringify(parseTable[nonTerminals[i]][ter]);
			if (j != terminals.length - 1) {
				str += ",";
			}
		}
		console.log(str, "]");
		if (i != nonTerminals.length - 1)
			process.stdout.write(",\n");
	}
	console.log("]\n")
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
	printParseTable: printParseTableArray,
	printModifiedProductions: printModifiedProductions,
	printFirst: printFirst,
	printFollows: printFollows
};
