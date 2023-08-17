const lexer = require("./lexer");
const parser = require("./parser");
const transfomer = require("./transformer");
const codeGenerator = require("./code-generator");

function compiler(input) {
  const tokens = lexer(input);

  const lispAST = parser(tokens);

  const jsAST = transfomer(lispAST);

  return codeGenerator(jsAST);
}

module.exports = compiler;
