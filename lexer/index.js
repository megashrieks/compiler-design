var tks = require("../rules/lexer");
module.exports = (code, tokens = tks) => {
	var lex_begin = 0,
		matched = -1;
	for (var i = 0; i < code.length; ++i) {
		var flag = matched;
		var j;
		for (j = 0; j < tokens.length; ++j) {
			var test = code
				.substr(lex_begin, i - lex_begin + 1)
				.match(tokens[j].value);
			if (test) {
				matched = j;
				break;
			}
		}
		if (flag != -1 && j == tokens.length) {
			if (tokens[matched].name != "space")
				console.log(
					'"' + code.substr(lex_begin, i - lex_begin) + '"',
					tokens[matched].name
				);
			lex_begin = i;
			matched = -1;
			i = i - 1;
		}
	}
	if (matched != -1) {
		if (tokens[matched].name != "space")
			console.log(
				'"' + code.substr(lex_begin, i - lex_begin) + '"',
				tokens[matched].name
			);
	}
};
