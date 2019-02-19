// Functions -> type id() begin Body end
// Body -> Declarations LE
// LE -> Loops
// LE -> Expressions
// LE -> ''
// Body -> Loops ED
// ED -> Expressions
// ED -> Declarations
// ED -> ''
// Body -> Expressions LD
// LD -> Loops
// LD -> Declarations
// LD -> ''
// Body -> ''
// Declarations -> type List;
// List -> Aid I'
// I' -> , Aid I'
// I' -> ''
// Aid -> id Ai'
// Ai' -> = num
// Ai' -> ''
// Loops -> for (E; E; E) begin Body end
// Expressions -> E;
// E -> T E'
// E' -> + T E'
// E' -> ''
// T -> F T'
// T' -> = F T'
// T' -> ''
// F -> R F'
// F' -> <= R F'
// F' -> ''
// R -> ++R
// R -> id
// R -> num

module.exports = {
	Functions: "type id() begin Body end",
	Body: "Declarations LE",
	LE: "Loops",
	LE1: "Expressions",
	LE2: "''",
	Body1: "Loops ED",
	ED: "Expressions",
	ED1: "Declarations",
	ED2: "''",
	Body2: "Expressions LD",
	LD: "Loops",
	LD1: "Declarations",
	LD2: "''",
	Body3: "''",
	Declarations: "type List ;",
	List: "Aid I'",
	"I'": ", Aid I'",
	"I'1": "''",
	Aid: "id Ai'",
	"Ai'": "= num",
	"Ai'1": "''",
	Loops: "for ( E ; E ; E ) begin Body end",
	Expressions: "E ;",
	E: "T E'",
	"E'": "+ T E'",
	"E'1": "''",
	T: "F T'",
	"T'": "= F T'",
	"T'1": "''",
	F: "R F'",
	"F'": "<= R F'",
	"F'1": "''",
	R: "++ R",
	R1: "id",
	R2: "num"
};
