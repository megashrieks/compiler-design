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
	console.log();
}
// */
/*
function printParseTable(parseTable, terminals, nonTerminals) {
	console.log("===========================");
	console.log("\tPARSE TABLE");
	console.log("===========================");
	console.log();
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
	console.log();
}
// */

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
