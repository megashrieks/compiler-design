var modifyProductionList = require("./initialise").modifyProductionList;
var [productions, nonTerminals, terminals] = modifyProductionList(
	require("../rules/grammar_input").grammar
);
var parseTable = require("./first").first(productions, nonTerminals, terminals);

var pt = require("./print");
pt.printModifiedProductions(productions);
pt.printParseTable(parseTable, terminals, nonTerminals);
pt.printFirst(productions);

require("./follow").findFollow(productions);

pt.printFollows(productions);
