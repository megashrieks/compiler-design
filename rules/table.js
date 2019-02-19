//Functions	Functions -> type id ( ) begin Body end
// Body	Body -> Declarations LE	Body -> Expressions LD				Body -> ''				Body -> Expressions LD	Body -> Loops ED			Body -> Expressions LD
// LE		LE -> Expressions				LE -> ''				LE -> Expressions	LE -> Loops			LE -> Expressions
// ED	ED -> Declarations	ED -> Expressions				ED -> ''				ED -> Expressions				ED -> Expressions
// LD	LD -> Declarations					LD -> ''					LD -> Loops
// Declarations	Declarations -> type List;
// List		List -> Aid I'
// I'							I' -> ''	I' -> , Aid I'
// Aid		Aid -> id Ai'
// Ai'							Ai' -> ''	Ai' -> ''	Ai' -> = num
// Loops											Loops -> for (E; E; E) begin Body end
// Expressions		Expressions -> E; Expressions -> E; Expressions -> E;
// E		E -> T E'								E -> T E'				E -> T E'
// E'				E' -> ''			E' -> ''					E' -> + T E'
// T		T -> F T'								T -> F T'				T -> F T'
// T'				T' -> ''			T' -> ''		T' -> = F T'			T' -> ''
// F		F -> R F'								F -> R F'				F -> R F'
// F'				F' -> ''			F' -> ''		F' -> ''			F' -> ''	F' -> <= R F'
// R		R -> id								R -> num				R -> ++R

const grammar = require("./grammars");

const matrix = [
	["Functions", "", "", "", "", "", "", "", "", "", "", ""],
	[
		"Body",
		"Body2",
		"",
		"Body3",
		"",
		"",
		"",
		"Body2",
		"Body1",
		"",
		"",
		"Body2"
	],
	["", "LE1", "", "LE2", "", "", "", "LE1", "LE", "", "", "LE1"],
	["ED1", "ED", "", "ED2", "", "", "", "ED", "", "", "", "ED"],
	["LD1", "", "", "LD2", "", "", "", "", "LD", "", "", ""],
	["Declarations", "", "", "", "", "", "", "", "", "", "", ""],
	["", "List", "", "", "", "", "", "", "", "", "", ""],
	["", "", "", "", "I'1", "I'", "", "", "", "", "", ""],
	["", "Aid", "", "", "", "", "", "", "", "", "", ""],
	["", "", "", "", "Ai'1", "Ai'1", "Ai'", "", "", "", "", ""],
	["", "", "", "", "", "", "", "", "Loops", "", "", ""],
	[
		"",
		"Expressions",
		"",
		"",
		"",
		"",
		"",
		"Expressions",
		"",
		"",
		"",
		"Expressions"
	],
	["", "E", "", "", "", "", "", "E", "", "", "", "E"],
	["", "", "E'1", "", "E'1", "", "", "", "", "E'", "", ""],
	["", "T", "", "", "", "", "", "T", "", "", "", "T"],
	["", "", "T'1", "", "T'1", "", "T'", "", "", "T'", "", ""],
	["", "F", "", "", "", "", "", "F", "", "", "", "F"],
	["", "", "F'1", "", "F'1", "", "F'1", "", "", "F'1", "F'", ""],
	["", "R1", "", "", "", "", "", "R2", "", "", "", "R"]
];
const rows = [
	"Functions",
	"Body",
	"LE",
	"ED",
	"LD",
	"Declarations",
	"List",
	"I'",
	"Aid",
	"Ai'",
	"Loops",
	"Expressions",
	"E",
	"E'",
	"T",
	"T'",
	"F",
	"F'",
	"R"
];
const columns = [
	"type",
	"id",
	")",
	"end",
	";",
	",",
	"=",
	"num",
	"for",
	"+",
	"<=",
	"++"
];
module.exports = (production, terminal) => {
	const element =
		grammar[matrix[rows.indexOf(production)][columns.indexOf(terminal)]];
	return element.length ? element : null;
};
