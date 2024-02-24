const clc = require("cli-color");
const inquirer = require("inquirer");

function* getQuestion() {
  yield {
    name: "version",
    question: {
      type: "confirm",
      message: "Did you update the package version?",
      default: false,
    },
    feedback: "You need to update the package version",
  };

  yield {
    name: "readme",
    question: {
      type: "confirm",
      message: "Did you update the README.md file?",
      default: false,
    },
    feedback: "You need to update the README.md file",
  };

  yield {
    name: "storybook",
    question: {
      type: "confirm",
      message: "Did you update the Introduction.mdx file?",
      default: false,
    },
    feedback: "You need to update the Introduction.mdx file",
  };
}

const question = getQuestion();
(async function repeatAsking() {
  const { value, done } = question.next();
  if (done) return;

  const answers = await inquirer.prompt([
    {
      name: value.name,
      ...value.question,
    },
  ]);

  if (!answers[value.name]) {
    console.log(`${clc.bgRed(" ABORTED ")} ${clc.red(value.feedback)}`);
    throw new Error("Aborted by some checklist anwser");
  }

  repeatAsking();
})();
