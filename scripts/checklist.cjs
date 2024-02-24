const clc = require("cli-color");
const inquirer = require("inquirer");
const checklist = require("./checklist.json");

(async function repeatAsking(i) {
  if (!Array.isArray(checklist)) {
    throwError("INVALID", "Checklist is not an array");
    return;
  }

  if (hasInvalidOption()) {
    throwError("INVALID", "Checklist has invalid option");
    return;
  }

  const NAME = "__answer";
  const option = checklist[i];
  if (!option) {
    showMessage("completed", "Checklist is completed");
    return;
  }

  const answers = await inquirer.prompt([
    {
      type: "confirm",
      message: option.question,
      default: false,
      name: NAME,
    },
  ]);

  if (!answers[NAME]) {
    throwError("ABORTED", option.feedback);
    return;
  }

  repeatAsking(++i);
})(0);

/**
 * @param {string} _heading
 * @param {string} _message
 */
function showMessage(_heading, _message) {
  const heading = clc.bgGreen(` ${_heading.toUpperCase()} `);
  const message = clc.green(_message);
  console.log(`${heading} ${message}`);
}

/**
 * @param {string} _heading
 * @param {string} _message
 */
function throwError(_heading, _message) {
  const heading = clc.bgRed(` ${_heading.toUpperCase()} `);
  const message = clc.red(_message);

  console.log(`${heading} ${message}`);
  throw new Error("Aborted checking checklist");
}

function hasInvalidOption() {
  return checklist.some((item) => {
    if (typeof item.question !== "string") return true;
    if (typeof item.feedback !== "string") return true;
    return false;
  });
}
