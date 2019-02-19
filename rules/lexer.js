module.exports = [
	{
		value: /^\/\/.*$/g,
		name: "comments",
		sub: false
	},
	{
		value: /^\/\*(.|\n)*\*\/$/g,
		name: "comments",
		sub: false
	},
	{
		value: /^[\s\t\n]+$/g,
		name: "space",
		sub: false
	},
	{
		value: /^[\(\)\[\]\{\}]$/g,
		name: "bracket",
		sub: true
	},
	{
		value: /^(begin|end|for)$/g,
		name: "keyword",
		sub: true
	},
	{
		value: /^(int|float|char)$/g,
		name: "type",
		sub: false
	},
	{
		value: /^(\+\+|\-\-)$/,
		name: "operator",
		sub: true
	},
	{
		value: /^(\+|\-|\*|\/ |\=)$/,
		name: "operator",
		sub: true
	},
	{
		value: /^(<|>|<=|>=|==|!=)$/g,
		name: "relational operator",
		sub: true
	},
	{
		value: /^;$/g,
		name: "statement terminator",
		sub: true
	},
	{
		value: /^(\d)+$/g,
		name: "num",
		sub: false
	},
	{
		value: /^\d*\.\d+$/g,
		name: "num",
		sub: false
	},
	{
		value: /^[a-zA-Z][a-zA-Z0-9]*$/g,
		name: "id",
		sub: false
	}
];
