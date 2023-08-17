function getOperator(node) {
  switch (node.callee.name) {
    case "sum":
      return "+";
    case "sub":
      return "-";
    case "mult":
      return "*";
    case "div":
      return "/";
    default:
      throw new TypeError(`Unknown operator "${node.callee.name}"`);
  }
}

function codeGenerator(node) {
  if (node.type === "NumericLiteral") {
    return node.value;
  }

  if (node.type === "Identifier") {
    return getOperator(node);
  }

  if (node.type === "CallExpression") {
    return `(${node.arguments
      .map(codeGenerator)
      .join(` ${getOperator(node)} `)})`;
  }

  if (node.type === "ExpressionStatement") {
    return `${codeGenerator(node.expression)};`;
  }

  if (node.type === "Program") {
    return node.body.map(codeGenerator).join("\n");
  }
}

module.exports = codeGenerator;
