const log = () => {};
function createParseTable() {
	var modifyProductionList = require("./initialise").modifyProductionList;
	var [productions, nonTerminals, terminals] = modifyProductionList(
		require("../rules/grammar_input")
	);
	var parseTable = require("./first")(productions, nonTerminals, terminals);
	require("./follow")(productions);

	require("./sync and epsilon entry")(productions, parseTable);

	var pt = require("./print");
	pt.printModifiedProductions(productions);
	pt.printParseTable(parseTable, terminals, nonTerminals);
	pt.printFirst(productions);
	pt.printFollows(productions);
	log(parseTable);
	return parseTable;
}
const parseTable = createParseTable();

module.exports = (nonTerminal, terminal) => {
	if (parseTable[nonTerminal][terminal] == "") return null;
	return parseTable[nonTerminal][terminal];
};
