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
// /*
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
