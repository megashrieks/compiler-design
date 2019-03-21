var initExp = require("./initialise");
var init = initExp.findFirstInit,
	isTerminal = initExp.isTerminal;

function findFirst(productions, nonTerminals, terminals) {
	var [parseTable, pFirst] = init(...arguments);
	var flag = true;
	//until no changes to first set
	while (flag) {
		flag = false;
		//select each non terminal
		for (var i in productions) {
			//set of productions under the non terminal
			var prod = productions[i].productions;
			//selecting each production under the non terminal
			for (var j in prod) {
				//Flag to check if scanning reached the end
				var eflag = false;
				//Going through each token in the production
				for (var k in prod[j]) {
					if (prod[j][k] == "''") {
						eflag = true;
						continue;
					}
					if (isTerminal(prod[j][k])) {
						//Checking if the first of that production already has the terminal in its first
						if (!pFirst[i][j].has(prod[j][k])) {
							//set change flag to true and update first set for the production and the non terminal
							flag = true;
							pFirst[i][j].add(prod[j][k]);
							productions[i].first.add(prod[j][k]);
							//adding the production to the parse table
							parseTable[i][prod[j][k]] = prod[j];
						}
						//since it is a terminal we needn't scan further thus break and set end to false
						eflag = false;
						break;
					} else {
						//Check if the scanned non terminal has anything in its first
						if (productions[prod[j][k]].first.size) {
							var difference = new Set(
								[...productions[prod[j][k]].first].filter(
									x => !pFirst[i][j].has(x)
								)
							);
							difference.delete("''");
							//Check if there is anything new to add to the first set
							if (difference.size) {
								flag = true;
								difference = Array.from(difference);
								for (var x in difference) {
									pFirst[i][j].add(difference[x]);
									productions[i].first.add(difference[x]);
									parseTable[i][difference[x]] = prod[j];
								}
							}
							//if there is null continue scanning
							if (productions[prod[j][k]].first.has("''")) {
								eflag = true;
								continue;
							}
						}
						//if non terminal doesn't have anything in the first currently or the non terminal doesn't
						//produce epsilon then stop scanning
						eflag = false;
						break;
					}
				}
				//if there is no epsilon is first set and it can reach the end
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
