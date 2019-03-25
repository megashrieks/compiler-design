const columnSize = 13;
const getRule = require("../Generator/generate");
const isProduction = token => {
	return !!token[0].match(/[A-Z]/);
};
const paddString = (string, len) => {
	let spaces = "";
	let no_of_spaces = len - string.length / 2;
	for (var i = 0; i < no_of_spaces; ++i) spaces += " ";
	let temp = spaces;
	if (string.length & 1) temp = temp.substr(0, temp.length - 1);
	return temp + string + spaces;
};
const printHeaders = (names, len) => {
	let seperator = "";
	let line = "";
	let namestring = "";
	for (var j = 0; j < len * 2; ++j) seperator += "-";
	for (var i = 0; i < names.length; ++i) {
		names[i] = paddString(names[i], len);
		line += seperator;
		if (i !== names.length - 1) {
			names[i] += "|";
			line += "+";
		}
		namestring += names[i];
	}
	console.log(namestring);
	console.log(line);
};
const printTrace = (stack, input, match) => {
	console.log(
		paddString(stack, columnSize) +
			"|" +
			paddString(input, columnSize) +
			"|   " +
			match
	);
};
module.exports = tokens => {
	printHeaders(["Stack", "Input", "Match"], columnSize);
	let stack = ["$", "Start"];
	let top = 1;
	let tokenIndex = 0;
	while (top > 0) {
		if (tokenIndex >= tokens.length) {
			console.log("Reached end of file while parsing.");
			return;
		}
		var token = tokens[tokenIndex];
		if (stack[top] === "''") {
			stack.splice(top, 1);
			--top;
			continue;
		}
		if (isProduction(stack[top])) {
			var rule = getRule(stack[top], token.name);
			if (rule === null) {
				printTrace(
					stack[top],
					token.name,
					"Error, skipping input symbol"
				);
				++tokenIndex;
				continue;
			} else if (rule === "sync") {
				printTrace(stack[top], token.name, "SYNC, popping stack");
				stack.splice(top, 1);
				--top;
				continue;
			}
			printTrace(
				stack[top],
				token.name,
				stack[top] + " -> " + rule.join(" ")
			);
			stack.splice(top, 1);
			--top;
			for (var i = rule.length - 1; i >= 0; --i) {
				stack.push(rule[i]);
				++top;
			}
		} else {
			if (token.name === stack[top]) {
				printTrace(
					stack[top],
					token.name,
					"Match : " + "'" + token.name + "'"
				);
				stack.splice(top, 1);
				--top;
				++tokenIndex;
			} else {
				printTrace(stack[top], token.name, "UNMATCHED : popping");
				stack.splice(top, 1);
				--top;
			}
		}
	}
	if (stack.length === 1) printTrace("$", "$", "ACCEPTED");
};
