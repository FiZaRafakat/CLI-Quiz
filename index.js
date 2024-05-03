#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import chalkAnimation from "chalk-animation";
async function firstAnimate(text) {
    for (let char of text) {
        process.stdout.write(char);
        await new Promise((resolve) => {
            setTimeout(resolve, 10);
        });
    }
}
const TypeScriptquiz = [
    { question: "1 _What is TypeScript ?",
        choices: [
            "(a) Superset of JavaScript with static types.",
            "(b) A standalone language.",
            "(c) A subset of JavaScript.",
            "(d) A JavScript framework."
        ],
        correctAns: "(a) Superset of JavaScript with static types."
    },
    { question: "2 _How is TypeScript differet from JavaScript ?",
        choices: [
            "(a) Adds static types to JavScript.",
            "(b) Is a completely different language.",
            "(c) Removes dynamic features from JavaScript.",
            "(d) Ehances JavaScript performances."
        ],
        correctAns: "(a) Adds static types to JavScript."
    },
    { question: "3 _Why do we compile TypeScript code into JavaScript ?",
        choices: [
            "(a) For better performance.",
            "(b) To run on all browsers.",
            "(c) To add static types.",
            "(d) TypeScript cannot run directly into browsers."
        ],
        correctAns: "(d) TypeScript cannot run directly into browsers."
    },
    { question: "4 _What is the difference between == And === in TypeScript ? ",
        choices: [
            "(a) They are both strict equally operators.",
            "(b) == Performs type correction , while === does not.",
            "(c) === converts types automatically, while == does not.",
            "(d) === is for  comparing values, while === is for comparing types."
        ],
        correctAns: "(d) === is for  comparing values, while === is for comparing types."
    }, { question: "5 _How do you define a function in TypeScript ? ",
        choices: [
            "(a) function add(a, b) {}",
            "(b) let add = function(a, b) {}",
            "(c) let add = (a, b) => {}",
            "(d) All of the above"
        ],
        correctAns: "(d) All of the above"
    },
    { question: "6 _What does the `void` type signify in TypeScript ? ",
        choices: [
            "(a) It represents an empty object",
            "(b) It indicates a function that does not return a value",
            "(c) It signifies a variable that can hold any type",
            "(d) It denotes an undefined variable"
        ],
        correctAns: "(b) It indicates a function that does not return a value"
    },
    { question: "7 _Which TypeScript feature allows you to combine multiple types together ? ",
        choices: [
            "(a) Type assertions",
            `(b) Union types`,
            "(c) Intersection types",
            "(d) Type guards"
        ],
        correctAns: `(b) Union types`
    },
    { question: "8 _What is the purpose of the this keyword in TypeScript ? ",
        choices: [
            "(a) To refer to the current object",
            "(b) To create a new instance of a class",
            "(c) To define a type",
            "(d) To import modules"
        ],
        correctAns: "(a) To refer to the current object"
    },
    { question: "9 _Which of the following TypeScript features is used for handling asynchronous operations ? ",
        choices: [
            "(a) Callbacks",
            "(b) Promises",
            "(c) Observables",
            "(d) async/await"
        ],
        correctAns: "(d) async/await"
    },
    { question: "10 _Which of the following is NOT a valid TypeScript primitive data type ? ",
        choices: [
            "(a) string",
            "(b) number",
            "(c) array",
            "(d) boolean"
        ],
        correctAns: "(c) array"
    }
];
const HTMLquiz = [
    { question: "1 _What does HTML stand for ? ",
        choices: [
            "(a) Hyper Transfer Markup Language",
            "(b) Hyper Text Markup Language",
            "(c) High Text Markup Language",
            "(d) Hyperlinks and Text Markup Language"
        ],
        correctAns: "(b) Hyper Text Markup Language"
    },
    { question: "2 _What is the correct HTML tag for creating a hyperlink ? ",
        choices: [
            "(a) <link>",
            "(b) <href>",
            "(c) <hyperlink>",
            "(d) <a>"
        ],
        correctAns: "(d) <a>"
    },
    { question: "3 _What is the default file extension for an HTML file ? ",
        choices: [
            "(a) .html",
            "(b) .ht",
            "(c) .htm",
            "(d) .web"
        ],
        correctAns: "(a) .html"
    },
    { question: "4 _What does the HTML tag <br> indicate ? ",
        choices: [
            "(a) Bold",
            "(b) Paragraph",
            "(c) Line break",
            "(d) Italics"
        ],
        correctAns: "(c) Line break"
    },
    { question: "5 _Which tag is used to define an image in HTML ? ",
        choices: [
            "(a) <img>",
            "(b) <image>",
            "(c) <src>",
            "(d) <picture>"
        ],
        correctAns: "(a) <img>"
    },
    { question: "6 _What does HTML5 introduce to replace <div> and <span> tags ? ",
        choices: [
            "(a) <block> and <inline>",
            "(b) <group> and <inline-group>",
            "(c) <section> and <article>",
            "(d) <container> and <block>"
        ],
        correctAns: "(c) <section> and <article>"
    },
    { question: "7 _What does the HTML tag <input> represent ? ",
        choices: [
            "(a) Text field",
            "(b) Image",
            "(c) Button",
            "(d) Checkbox or radio button"
        ],
        correctAns: "(d) Checkbox or radio button"
    },
    { question: "8 _Which attribute is used to specify the URL of the page the link goes to ? ",
        choices: [
            "(a) src",
            "(b) link",
            "(c) href",
            "(d) url"
        ],
        correctAns: "(c) href"
    },
    { question: "9 _What is the correct HTML for adding a background color ? ",
        choices: [
            `(a) <body style="background-color:yellow;">`,
            "(b) <background>yellow</background>",
            `(c) <bgcolor="yellow">`,
            "(d) <color>yellow</color>"
        ],
        correctAns: `(a) <body style="background-color:yellow;">`
    },
    { question: "10 _Which HTML tag is used to define a hyperlink within the same page ? ",
        choices: [
            "(a) <anchor>",
            `(b) <a href="#">`,
            "(c) <link>",
            `(d) <a id="link">`
        ],
        correctAns: `(b) <a href="#">`
    }
];
const CSSquiz = [
    { question: "1 _What does CSS stand for ? ",
        choices: [
            "(a) Creative Style Sheets",
            "(b) Cascading Style Sheets",
            "(c) Colorful Style Sheets",
            "(d) Computer Style Sheets"
        ],
        correctAns: "(b) Cascading Style Sheets"
    },
    { question: "2 _Which CSS property is used to change the text color ? ",
        choices: [
            "(a) text-color",
            "(b) textColor",
            "(c) color",
            "(d) font-color",
        ],
        correctAns: "(c) color"
    },
    { question: `3 _How do you select an element with id "demo" in CSS ? `,
        choices: [
            "(a) #demo",
            "(b) .demo",
            "(c) *demo",
            "(d) &demo"
        ],
        correctAns: "(a) #demo"
    },
    { question: "4 _Which property is used to change the background color of an element ? ",
        choices: [
            "(a) color-background",
            "(b) bgcolor",
            "(c) background",
            "(d) background-color"
        ],
        correctAns: "(d) background-color"
    },
    { question: "5 _Which CSS property is used to make text italic ? ",
        choices: [
            "(a) text-style",
            "(b) italic",
            "(c) font-style",
            "(d) font-italic"
        ],
        correctAns: "(c) font-style",
    },
    { question: "6 _How do you center-align text in CSS ? ",
        choices: [
            "(a) text-align: center;",
            "(b) align: center;",
            "(c) center-align: true;",
            "(d) alignment: center;"
        ],
        correctAns: "(a) text-align: center;"
    },
    { question: "7 _Which CSS property is used for setting the thickness of the font ? ",
        choices: [
            "(a) font-thickness",
            "(b) text-weight",
            "(c) weight",
            "(d) font-weight"
        ],
        correctAns: "(d) font-weight"
    },
    { question: `8 _What does the CSS property "opacity: 0.5;" do ? `,
        choices: [
            "(a) Makes the element fully transparent",
            "(b) Adds a border to the element",
            "(c) Makes the element semi-transparent",
            "(d) Changes the element's color"
        ],
        correctAns: "(c) Makes the element semi-transparent"
    },
    { question: "9 _Which CSS property is used to create rounded corners ? ",
        choices: [
            "(a) border-radius",
            "(b) corner-radius",
            "(c) round-corners",
            "(d) border-style"
        ],
        correctAns: "(a) border-radius"
    },
    { question: `10 _What does the CSS property "position: relative;" do ? `,
        choices: [
            "(a) Makes the element absolutely positioned",
            "(b) Centers the element horizontally",
            "(c) Positions the element relative to its normal position",
            "(d) Floats the element to the right"
        ],
        correctAns: "(c) Positions the element relative to its normal position"
    }
];
const PythonQuiz = [
    { question: "1 _What is Python primarily known for ? ",
        choices: [
            "(a) High-performance computing",
            "(b) Web development",
            "(c) Artificial intelligence and data science",
            "(d) Game development"
        ],
        correctAns: "(c) Artificial intelligence and data science"
    },
    { question: "2 _What is the significance of Python's indentation ? ",
        choices: [
            "(a) It helps in reducing file size",
            "(b) It improves code readability",
            "(c) It is necessary for code execution",
            "(d) It has no significance"
        ],
        correctAns: "(b) It improves code readability"
    },
    { question: "3 _Which of the following is NOT a primitive data type in Python ? ",
        choices: [
            "(a) List",
            "(b) Integer",
            "(c) Float",
            "(d) Boolean"
        ],
        correctAns: "(a) List"
    },
    { question: "4 _Which of the following is NOT a valid way to comment in Python ? ",
        choices: [
            "(a) // ",
            "(b) #",
            "(c) ''' ''' ",
            `(d) """ """ `
        ],
        correctAns: "(a) // "
    },
    { question: "5 _What is the purpose of the pass statement in Python  ? ",
        choices: [
            "(a) To end a loop",
            "(b) To execute a block of code multiple times",
            "(c) To create a placeholder",
            "(d) To raise an exception"
        ],
        correctAns: "(c) To create a placeholder"
    },
    { question: "6 _What does the `is` operator do in Python ? ",
        choices: [
            "(a) Compares the values of two variables",
            "(b) Checks if two variables refer to the same object",
            "(c) Checks if a variable is not empty",
            "(d) Performs a bitwise comparison"
        ],
        correctAns: "(b) Checks if two variables refer to the same object"
    },
    { question: `7 _ What is the output of the following code snippet ? 
                      \n print(2 + 2 * 3)`,
        choices: [
            "(a) 8",
            "(b) 10",
            "(c) 6",
            "(d) 12"
        ],
        correctAns: "(c) 6"
    },
    { question: "8 _Which of the following statements is true about Python dictionaries ? ",
        choices: [
            "(a) Dictionaries are ordered collections of items",
            "(b) Dictionary keys must be unique",
            "(c) Dictionary values can be accessed using indices",
            "(d) Dictionaries are immutable"
        ],
        correctAns: "(b) Dictionary keys must be unique"
    },
    { question: "9 _Which of the following is NOT a standard Python library ? ",
        choices: [
            "(a) numpy",
            "(b) pandas",
            "(c) math ",
            "(d) requests",
        ],
        correctAns: "(d) requests"
    },
    { question: "10 _Which of the following is NOT a valid method of file handling in Python ? ",
        choices: [
            "(a) read() ",
            "(b) write() ",
            "(c) append() ",
            "(d) delete() "
        ],
        correctAns: "(d) delete() "
    }
];
clear();
const rainbow = chalkAnimation.rainbow(figlet.textSync("Quiz", { horizontalLayout: "full" }));
setTimeout(() => {
    rainbow.stop();
    quizStart();
}, 1000);
async function quizStart() {
    let score = 0;
    let ask = await inquirer.prompt([{
            name: "quiz",
            type: "list",
            message: "Which of the following language you have a knowledge ?\n\n",
            choices: ["TypeScript", "Python", "HTML", "CSS"]
        }]);
    await firstAnimate(chalk.bgCyan.whiteBright.underline.italic("\n\tOkay, let me check how much knowledge you have ....:) \n"));
    if (ask.quiz === "TypeScript") {
        for (const query of TypeScriptquiz) {
            const answerTypescript = await inquirer.prompt({
                type: "list",
                name: "Answers",
                message: (`${query.question}\n`),
                choices: query.choices
            });
            if (answerTypescript.Answers === query.correctAns) {
                await firstAnimate(chalk.greenBright.underline.italic("\nCorrect\n"));
                score++;
            }
            else {
                await firstAnimate(chalk.redBright.underline.italic(`\nIncorrect ! The correct Answer is : ${query.correctAns}\n`));
            }
        }
        await firstAnimate(chalk.bgMagenta.whiteBright.italic(`\n\tQuiz Complete! Your score is ${score} out of ${TypeScriptquiz.length}\n`));
    }
    else if (ask.quiz === "HTML") {
        for (const query of HTMLquiz) {
            const answerHTML = await inquirer.prompt({
                type: "list",
                name: "Answers",
                message: (`${query.question}\n`),
                choices: query.choices
            });
            if (answerHTML.Answers === query.correctAns) {
                await firstAnimate(chalk.greenBright.underline.italic("\nCorrect\n"));
                score++;
            }
            else {
                await firstAnimate(chalk.redBright.underline.italic(`\nIncorrect ! The correct Answer is : ${query.correctAns}\n`));
            }
        }
        await firstAnimate(chalk.bgMagenta.whiteBright.italic(`\n\tQuiz Complete! Your score is ${score} out of ${HTMLquiz.length}\n`));
    }
    else if (ask.quiz === "CSS") {
        for (const query of CSSquiz) {
            const answerCSS = await inquirer.prompt({
                type: "list",
                name: "Answers",
                message: (`${query.question}\n`),
                choices: query.choices
            });
            if (answerCSS.Answers === query.correctAns) {
                await firstAnimate(chalk.greenBright.underline.italic("\nCorrect\n"));
                score++;
            }
            else {
                await firstAnimate(chalk.redBright.underline.italic(`\nIncorrect ! The correct Answer is : ${query.correctAns}\n`));
            }
        }
        await firstAnimate(chalk.bgMagenta.whiteBright.italic(`\n\tQuiz Complete! Your score is ${score} out of ${CSSquiz.length}\n`));
    }
    else if (ask.quiz === "Python") {
        for (const query of PythonQuiz) {
            const answerPython = await inquirer.prompt({
                type: "list",
                name: "Answers",
                message: (`${query.question}\n`),
                choices: query.choices
            });
            if (answerPython.Answers === query.correctAns) {
                await firstAnimate(chalk.greenBright.underline.italic("\nCorrect\n"));
                score++;
            }
            else {
                await firstAnimate(chalk.redBright.underline.italic(`\nIncorrect ! The correct Answer is : ${query.correctAns}\n`));
            }
        }
        await firstAnimate(chalk.bgMagenta.whiteBright.italic(`\n\tQuiz Complete! Your score is ${score} out of ${PythonQuiz.length}\n`));
    }
}
