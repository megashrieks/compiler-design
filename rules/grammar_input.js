var productions = [
	"Start -> Functions",
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
	"X -> + + id"
];
//desk calculator productions for testing sync
// var productions = [
// 	"Start -> E",
// 	"E -> T E'",
// 	"E' -> + T E'",
// 	"E' -> ''",
// 	"T -> F T'",
// 	"T' -> * F T'",
// 	"T' -> ''",
// 	"F -> ( E )",
// 	"F -> id"
// ];
module.exports = productions;
