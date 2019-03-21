var initExp = require("./initialise");
var init = initExp.findFirstInit,
	isTerminal = initExp.isTerminal;

function findFirst(productions, nonTerminals, terminals) {
	var [parseTable, visited, pFirst] = init(...arguments);
	var flag = true;
	while (flag) {
		flag = false;
		for (var i in productions) {
			var prod = productions[i].productions;
			for (var j in prod) {
				var k;
				var eflag = false;
				for (k in prod[j]) {
					if (prod[j][k] == "''") {
						eflag = true;
						continue;
					}
					if (isTerminal(prod[j][k])) {
						if (!pFirst[i][j].has(prod[j][k])) {
							flag = true;
							pFirst[i][j].add(prod[j][k]);
							productions[i].first.add(
								...Array.from(pFirst[i][j])
							);
							parseTable[i][prod[j][k]] = prod[j];
						}
						eflag = false;
						break;
					} else {
						if (productions[prod[j][k]].first.size) {
							var difference = new Set(
								[...productions[prod[j][k]].first].filter(
									x => !pFirst[i][j].has(x)
								)
							);
							if (difference.size) {
								flag = true;
								difference = Array.from(difference);
								for (var x in difference) {
									pFirst[i][j].add(difference[x]);
									productions[i].first.add(difference[x]);
									parseTable[i][difference[x]] = prod[j];
								}
							}
							if (productions[prod[j][k]].first.has("''")) {
								eflag = true;
								continue;
							}
						}
						eflag = false;
						break;
					}
				}

				if (!pFirst[i][j].has("''")) {
					if (eflag) {
						pFirst[i][j].add("''");
						productions[i].first.add("''");
						flag = true;
					}
				}
			}
		}
	}
	return parseTable;
}
module.exports = {
	first: findFirst
};
