const { logMessage, logError } = require("./logger");
const compile = require("./compile");

try {
  const srcFile = process.argv[2];

  logMessage(`Source file ${srcFile} execution started`);

  const output = compile(srcFile);

  const start = performance.now();

  const result = eval(output);

  const end = performance.now();

  logMessage(
    `Source file execution finished. Took ${(end - start).toFixed(
      2
    )}ms. Result: ${result}`
  );
} catch (error) {
  logError(error.message);

  process.exit(1);
}
