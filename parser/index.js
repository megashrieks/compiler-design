const getRule = require("../Generator/generate");
const isProduction = token => {
	return !!token[0].match(/[A-Z]/);
};
module.exports = tokens => {
	let stack = ["$", "Functions"];
	let top = 1;
	let tokenIndex = 0;
	var n = 100;
	while (--n) {
		var token = tokens[tokenIndex];
		if (stack[top] == "$") {
			console.log("Accepted");
			break;
		}
		if (stack[top] === "''") {
			stack.splice(top, 1);
			--top;
		}
		if (isProduction(stack[top])) {
			var rule = getRule(stack[top], token.name);
			console.log(stack[top], "->", rule.join(" "));
			stack.splice(top, 1);
			--top;
			for (var i = rule.length - 1; i >= 0; --i) {
				stack.push(rule[i]);
				++top;
			}
		} else {
			if (token.name === stack[top]) {
				stack.splice(top, 1);
				--top;
				++tokenIndex;
			} else {
				console.log("unmatch : ", token, stack[top]);
				return;
			}
		}
	}
};
