// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "node:fs"
import { renderLicenseBadge } from "./utils/generateMarkdown";

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'Title',
    message: 'What is your project title?'
   },
   {
    type: 'input',
    name: 'Description',
    message: 'What is your project Description?',
   },
   {
    type: 'input',
    name: 'Installation',
    message: 'Write the installation process for your project!', 
   },
   {
    type: 'list',
    name: 'License',
    message: 'Which license would you select?',
    choices :['MIT','ISC', 'Apachev2.0', 'GPLv3', ]
   },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
let readMeContent =
`
# ${data.Title} ${renderLicenseBadge(data.License)}

## Description

${data.Description}

## Installation
${data.Installation}

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Usage
    -- todo --

## License 
${data.License}

## How to Contribute 
    -- todo --
## Tests
    -- todo --
## Questions
    --todo 
` ;

fs.writeFile(fileName, readMeContent, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('file written successfully :white_check_mark:');
    }
  })
}; 

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        writeToFile('README.md', answers);
    })
}
// Function call to initialize app
init();

