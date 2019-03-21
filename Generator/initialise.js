function isTerminal(char) {
	return char[0] == char[0].toLowerCase();
}
function genTerminals(productions) {
	terminals = new Set();
	for (var i in productions)
		for (var j = 2; j < productions[i].length; ++j) {
			if (isTerminal(productions[i][j])) terminals.add(productions[i][j]);
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
	for (var i = 0; i < nonTerminals.length; ++i) {
		var nProductions = [];
		for (var j = 0; j < n; ++j)
			if (productions[j][0] == nonTerminals[i])
				nProductions.push(productions[j].slice(2));
		lis[nonTerminals[i]] = {
			productions: nProductions,
			first: new Set(),
			follow: new Set()
		};
	}
	return [lis, nonTerminals, terminals];
}

function findFirstInit(productions, nonTerminals, terminals) {
	var visited = {};
	var pFirst = {};
	var parseTable = {};

	for (var i = 0; i < nonTerminals.length; ++i) {
		parseTable[nonTerminals[i]] = {};
		for (var j = 0; j < terminals.length; ++j) {
			parseTable[nonTerminals[i]][terminals[j]] = "";
		}

		visited[nonTerminals[i]] = new Array(
			productions[nonTerminals[i]]["productions"].length
		).fill(0);
		pFirst[nonTerminals[i]] = new Array(
			productions[nonTerminals[i]]["productions"].length
		)
			.fill(0)
			.map(_ => new Set());
	}
	return [parseTable, visited, pFirst];
}
module.exports = {
	modifyProductionList: modifyProductionList,
	findFirstInit: findFirstInit,
	isTerminal: isTerminal
};
