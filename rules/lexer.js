module.exports = [
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
];
