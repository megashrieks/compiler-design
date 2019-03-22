// /*
var productions = ["Functions -> type id ( ) begin Body end",
"Body -> Declarations LE",
"LE -> Loops",
"LE1 -> Expressions",
"LE2 -> 
"Body1 -> Loops ED",
"ED -> Expressions",
"ED1 -> Declarations",
"ED2 -> 
"Body2 -> Expressions LD",
"LD -> Loops",
"LD1 -> Declarations",
"LD2 -> 
"Body3 -> 
"Declarations -> type List ;",
"List -> Aid I'",
"" ->  ", Aid I'",
"" -> 1": "''",
"Aid -> id Ai'",
"" ->  "= num",
"" -> 1": "''",
"Loops -> for ( E ; E ; E ) begin Body end",
"Expressions -> E ;",
"E -> T E'",
"" ->  "+ T E'",
"" -> 1": "''",
"T -> F T'",
"" ->  "= F T'",
"" -> 1": "''",
"F -> R F'",
"" ->  "<= R F'",
"" -> 1": "''",
"R ->  R",
"R1 -> id",
"R2 -> num"
];
/*
var productions = [
	"Functions -> type id ( ) begin Body end",
	"Body -> Declarations Body",
	"Body -> Loops Body",
	"Body -> Es Body",
	"Body -> ''",
	"Declarations -> type List ;",
	"List -> AID I'",
	"I' -> , AID I'",
	"I' -> ''",
	"AID -> id AID'",
	"AID' -> = num",
	"AID' -> ''",
	"Loops -> for ( Es Es E ) begin Body end",
	"Es -> E ;",
	"E -> X E'",
	"E' -> Op X E'",
	"E' -> ''",
	"Op -> +",
	"Op -> <=",
	"Op -> =",
	"X -> id",
	"X -> num",
	"E -> ++ E"
];
// */
/*
var productions = [
	"E -> T E'",
	"E' -> + T E'",
	"E' -> ''",
	"T -> F T'",
	"T' -> * F T'",
	"T' -> ''",
	"F -> id",
	"F -> ( E )"
];
// */
module.exports = productions;
