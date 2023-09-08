import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter Your Sentence To  Count The Word"
    },
]);
const word = answers.sentence.trim().split(" ");
console.log(`Your Sentence Word Count is ${word.length}`);
