const { readFileSync } = require("fs");
const { logMessage } = require("./logger");
const compiler = require("../compiler/compiler");

function readSrcFile(srcFile) {
  if (!srcFile) {
    throw new Error("No source file specified");
  }

  if (!srcFile.endsWith(".dml")) {
    throw new Error("Invalid source file extension");
  }

  return readFileSync(srcFile, { encoding: "binary" });
}

function compile(srcFile) {
  logMessage("Compilation process started");

  const start = performance.now();

  logMessage("Reading source file...");

  const input = readSrcFile(srcFile);

  logMessage("Source file successfully read. Compiling content...");

  const output = compiler(input);

  const end = performance.now();

  logMessage(
    `Compilation process finished. Took ${(end - start).toFixed(2)}ms`
  );

  return output;
}

module.exports = compile;
