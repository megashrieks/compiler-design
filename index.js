var input = `
	int main()
	begin
		//abcdef
		int sum = 0;
		for(int i = 0;i <= 10;++i)
		begin
			/*
				here we are adding i to sum
			*/
			sum = sum + i;
		end
	end
`;

function lexer(code, tokens) {
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
}
lexer(input, [
	{
		value: /^\/\/.*$/g,
		name: "single line comment"
	},
	{
		value: /^\/\*(.|\n)*\*\/$/g,
		name: "multi line comment"
	},
	{
		value: /^[\s\t\n]+$/g,
		name: "space"
	},
	{
		value: /^[\(\)\[\]\{\}]$/g,
		name: "bracket"
	},
	{
		value: /^(begin|end|for)$/g,
		name: "keyword"
	},
	{
		value: /^(int|float|char)$/g,
		name: "type"
	},
	{
		value: /^(\+|\-|\*|\/ |\=)$/,
		name: "operator"
	},
	{
		value: /^(<|>|<=|>=|==|!=)$/g,
		name: "relational operator"
	},
	{
		value: /^;$/g,
		name: "statement terminator"
	},
	{
		value: /^(\d)+$/g,
		name: "number"
	},
	{
		value: /^\d*\.\d+$/g,
		name: "floating number"
	},
	{
		value: /^[a-zA-Z][a-zA-Z0-9]*$/g,
		name: "identifier"
	}
]);
