function isTerminal(char) {
	return char[0] == char[0].toLowerCase();
}
function genTerminals(productions) {
	terminals = new Set();
	//Array of production
	for (var i in productions) {
		//Scanning from 2nd token since first token is non terminal and second is "->"
		for (var j = 2; j < productions[i].length; ++j) {
			if (isTerminal(productions[i][j])) terminals.add(productions[i][j]);
		}
	}
	return Array.from(terminals);
}
function modifyProductionList(productions) {
	var n = productions.length;
	productions = productions.map(p => p.split(" "));
	var terminals = genTerminals(productions);
	var nonTerminals = new Set(productions.map(p => p[0]));
	nonTerminals = Array.from(nonTerminals);

	var lis = {};
	var startFlag = true;
	for (var i = 0; i < nonTerminals.length; ++i) {
		//Array of productions under the non terminal
		var nProductions = [];
		for (var j = 0; j < n; ++j)
			if (productions[j][0] == nonTerminals[i])
				nProductions.push(productions[j].slice(2));
		//if it is first non terminal it is taken as start symbol
		if (startFlag) {
			startFlag = false;
			lis[nonTerminals[i]] = {
				productions: nProductions,
				first: new Set(),
				follow: new Set(["$"])
			};
		} else {
			lis[nonTerminals[i]] = {
				productions: nProductions,
				first: new Set(),
				follow: new Set()
			};
		}
	}
	return [lis, nonTerminals, terminals];
}
//Initializing for findFirst function
function findFirstInit(productions, nonTerminals, terminals) {
	var pFirst = {};
	var parseTable = {};

	for (var i = 0; i < nonTerminals.length; ++i) {
		parseTable[nonTerminals[i]] = {};
		for (var j = 0; j < terminals.length; ++j)
			//"" represents blank cell
			if (terminals[j] != "''")
				parseTable[nonTerminals[i]][terminals[j]] = "";
			else parseTable[nonTerminals[i]]["$"] = "";
		pFirst[nonTerminals[i]] = new Array(
			productions[nonTerminals[i]]["productions"].length
		)
			.fill(0)
			.map(_ => new Set());
	}
	return [parseTable, pFirst];
}
module.exports = {
	modifyProductionList: modifyProductionList,
	findFirstInit: findFirstInit,
	isTerminal: isTerminal
};
