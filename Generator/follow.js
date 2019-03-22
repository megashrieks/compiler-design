var isTerminal = require("./initialise").isTerminal;

function findFollow(productions) {
	//change flag
	var flag = true;
	while (flag) {
		flag = false;
		//selecting each non terminal
		for (var i in productions) {
			//set of production under the non terminal
			prods = productions[i]["productions"];
			for (var j in prods) {
				//selecting each token in the production
				for (var k = 0; k < prods[j].length; ++k) {
					//only non terminals need follow
					if (!isTerminal(prods[j][k])) {
						//flag to check if it reached end
						var eflag = true;
						//scanning each token after the current
						for (var l = k + 1; l < prods[j].length; ++l) {
							if (prods[j][l] == "''") continue;
							if (isTerminal(prods[j][l])) {
								//if terminal already present no change
								if (
									!productions[prods[j][k]].follow.has(
										prods[j][l]
									)
								) {
									productions[prods[j][k]].follow.add(
										prods[j][l]
									);
									//a follow set has changed
									flag = true;
								}
								//won't reach the end
								eflag = false;
								break;
							} else {
								var difference = new Set(
									[...productions[prods[j][l]].first].filter(
										x =>
											!productions[
												prods[j][k]
											].follow.has(x)
									)
								);
								var hasEpsilon = difference.delete("''");
								//if anything to add to follow add and set flag indicating change to true
								if (difference.size) {
									productions[prods[j][k]].follow = new Set([
										...productions[prods[j][k]].follow,
										...difference
									]);
									flag = true;
								}
								//if epsilon not present then scan reached the end else continue
								if (!hasEpsilon) {
									eflag = false;
									break;
								}
							}
						}
						//if scan reached end follow(current) = follow(i)
						if (eflag) {
							var difference = new Set(
								[...productions[i].follow].filter(
									x => !productions[prods[j][k]].follow.has(x)
								)
							);
							if (difference.size) {
								productions[prods[j][k]].follow = new Set([
									...productions[prods[j][k]].follow,
									...difference
								]);
							}
						}
					}
				}
			}
		}
	}
}

module.exports = findFollow;
