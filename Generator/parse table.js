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

function init(productions, nonTerminals, terminals) {
	var parseTable = new Array(nonTerminals.length)
		.fill("")
		.map(_ => new Array(terminals.length).fill(""));
	var visited = {};
	var pFirst = {};

	for (var i = 0; i < nonTerminals.length; ++i) {
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

function findFirst(productions, nonTerminals, terminals) {
	var [parseTable, visited, pFirst] = init(...arguments);
	var flag = true;
	while (flag) {
		flag = false;
		epFlag = false;
		for (var i in productions) {
			var prod = productions[i].productions;
			for (var j in prod) {
				epFlag = false;
				var k;
				for (k in prod[j]) {
					if (prod[j][k] == "''") {
						epFlag = true;
						continue;
					}
					if (isTerminal(prod[j][k])) {
						if (!pFirst[i][j].has(prod[j][k])) {
							flag = true;
							pFirst[i][j].add(prod[j][k]);
							productions[i].first.add(
								...Array.from(pFirst[i][j])
							);
							// console.log(i, productions[i].first);
						}
						epFlag = false;
						break;
					} else {
						if (productions[prod[j][k]].first.size) {
							var difference = new Set(
								[...productions[prod[j][k]].first].filter(
									x => !pFirst[i][j].has(x)
								)
							);
							if (difference.size) {
								console.log(i, prod[j][k]);
								console.log(difference);
								console.log();
								// console.log(i, j, difference);
								flag = true;
								pFirst[i][j].add(...Array.from(difference));
								productions[i].first.add(
									...Array.from(difference)
								);
							}
							if (productions[prod[j][k]].first.has("''")) {
								epFlag = true;
								continue;
							}
						}
						epFlag = false;
						break;
					}
				}
				if (epFlag && k == prod[j].length)
					productions[i].first.add("''");
			}
		}
	}
	// for (var i in nonTerminals) {
	// for (var j in pFirst[nonTerminals[i]])
	// console.log(nonTerminals[i], j, pFirst[nonTerminals[i]][j]);
	// }
}
function printModifiedProductions(lis) {
	for (var i in lis) {
		console.log(i);
		var productions = lis[i]["productions"];
		for (var j = 0; j < productions.length; ++j)
			console.log(productions[j]);
	}
}

var productions = [
	"Functions -> type id ( ) begin Body end",
	"Body -> Declarations Body",
	"Body -> Loops Body",
	"Body -> Es Body",
	"Body -> ''",
	"Declarations -> type List ;",
	"List -> AID I'",
	"I' -> , AID I'",
	"I' -> ''",
	"AID -> id AID'",
	"AID' -> = num",
	"AID' -> ''",
	"Loops -> for ( Es Es E ) begin Body end",
	"Es -> E ;",
	"E -> X E'",
	"E' -> Op X E'",
	"E' -> ''",
	"Op -> +",
	"Op -> <=",
	"Op -> =",
	"X -> id",
	"X -> num",
	"E -> ++ E"
];
var [productions, nonTerminals, terminals] = modifyProductionList(productions);
findFirst(productions, nonTerminals, terminals);
/*
printModifiedProductions(productions);
console.log(nonTerminals);
console.log(terminals);
console.log(parseTable);
console.log(visited);
*/
for (var i in productions) console.log(i, productions[i].first);
