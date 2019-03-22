function addEpsilons(productions, parseTable, nonTerminal) {
	var follows = Array.from(productions[nonTerminal].follow);
	//adding in parsetable(nonterminal, elements in follow) production -> ''
	for (var i in follows) parseTable[nonTerminal][follows[i]] = ["''"];
}
function SyncAndEpsilon(productions, parseTable) {
	//selecting non terminals
	for (var i in productions) {
		//productions under the non terminal
		var prods = productions[i].productions;
		var hasEpsilonProduction = false;
		//selecting each prodcution
		for (var j in prods) {
			//if the production -> ''
			if (prods[j][0] == "''" && prods[j].length == 1) {
				addEpsilons(productions, parseTable, i);
				hasEpsilonProduction = true;
				break;
			}
		}
	}
}

module.exports = SyncAndEpsilon;
