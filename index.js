const lexer = require("./lexer");
const code = require("./source/code.js");
const parser = require("./parser");
parser(lexer(code));
