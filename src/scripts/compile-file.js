const { writeFileSync } = require("fs");
const { logMessage, logError } = require("./logger");
const compile = require("./compile");

function writeDestFile(srcFile, content) {
  const destFile = srcFile.replace(".dml", ".js");

  writeFileSync(destFile, content, { encoding: "binary" });
}

try {
  const srcFile = process.argv[2];

  const output = compile(srcFile);

  logMessage("Writing compiled output into destination file...");

  writeDestFile(srcFile, output);

  logMessage("Destination file successfully written");

  logMessage("Process finished");
} catch (error) {
  logError(error.message);

  process.exit(1);
}
