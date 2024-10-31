// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "node:fs"
import { renderLicenseBadge, renderLicenseSection } from "./utils/generateMarkdown.js";


// TODO: Create an array of questions for user input
const questions = [{ // array of questions
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
    type: 'input',
    name: 'Usage',
    message: 'How to use your app?', 
   },
   {
    type: 'input',
    name: 'Contribute',
    message: 'How to Contribute?',
   },
   {
    type: 'input',
    name: 'Tests',
    message: 'How to test your App?',
   },
   {
    type: 'list',
    name: 'License',
    message: 'Which license would you select?',
    choices :['MIT','ISC', 'Apachev2' ]
   },
   {
    type: 'input',
    name: 'Username',
    message: 'What is your GitHub Link?',
   },
   {
    type: 'input',
    name: 'Email',
    message: 'What is your Email address?', 
   },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { // function to write the file
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

${data.Usage} 

## How to Contribute 

${data.Contribute}

## Tests

${data.Tests}


${renderLicenseSection(data.License)};

## Questions
GitHub Account: [${data.Username}](${data.Username})

Reach me if you have more Questions: ${data.Email}

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
    inquirer.prompt(questions).then(data => {
        console.log(data);
        writeToFile('README.md', data);
    })
}
// Function call to initialize app
init();

