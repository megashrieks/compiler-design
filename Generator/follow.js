var isTerminal = require("./initialise").isTerminal;

function findFollow(productions) {
	var flag = true;
	for (var zz = 0; zz < 4; ++zz) {
		flag = false;
		for (var i in productions) {
			prods = productions[i]["productions"];
			for (var j in prods) {
				for (var k = 0; k < prods[j].length; ++k) {
					if (!isTerminal(prods[j][k])) {
						var eflag = true;
						for (var l = k + 1; l < prods[j].length; ++l) {
							if (prods[j][l] == "''") continue;
							if (isTerminal(prods[j][l])) {
								if (
									!productions[prods[j][k]].follow.has(
										prods[j][l]
									)
								) {
									productions[prods[j][k]].follow.add(
										prods[j][l]
									);
									flag = true;
								}
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
								if (difference.size) {
									productions[prods[j][k]].follow = new Set([
										...productions[prods[j][k]].follow,
										...difference
									]);
									flag = true;
								}
								if (!hasEpsilon) {
									eflag = false;
									break;
								}
							}
						}
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
function printFollows(productions) {
	for (var i in productions) {
		console.log(i, " : ", productions[i].follow);
	}
}
module.exports = {
	findFollow: findFollow,
	printFollows: printFollows
};
