var modifyProductionList = require("./initialise").modifyProductionList;
var [productions, nonTerminals, terminals] = modifyProductionList(
	require("../rules/grammar_input").grammar
);
var parseTable = require("./first").first(productions, nonTerminals, terminals);

// var pt = require("./print table");
// pt.printModifiedProductions(productions);
// pt.printParseTable(parseTable, terminals, nonTerminals);

var follows = require("./follow");
follows.findFollow(productions);
follows.printFollows(productions);
