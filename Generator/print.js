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
// /*
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
