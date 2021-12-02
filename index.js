// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = 
inquirer
.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: 'Please provide your motivations for this project',
        name: 'motivations',
    },
    {
        type: 'input',
        message: 'Why did you build this project?',
        name: 'whyBuilt',
    },
    {
        type: 'input',
        message: 'What problem does this project solve?',
        name: 'problem',
    },
    {
        type: 'input',
        message: 'What leasons did you learn in the process of completing this project?',
        name: 'lessons',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please provide instructions and examples for use.',
        name: 'usage',
    },
    {
        type: 'confirm',
        message: 'Do you have a screen shot of the project to provide?',
        name: 'photo',
        default: false
    },
    {
        type: 'input',
        message: 'Please provide the photo alt text.',
        name: 'altText',
        when: data => data.photo === true
    },
    {
        type: 'input',
        message: 'Please provide the path for the photo.',
        name: 'photoPath',
        when: data => data.photo === true
    },
    {
        type: 'confirm',
        message: 'Do you have another screen shot of the project to provide?',
        name: 'additionalPhoto',
    },
    {
        type: 'input',
        message: 'Do you have another screen shot of the project to provide?',
        name: 'additionalPhoto',
    },
])
.then((responce) 
    ,writeToFile(fileName, data))

  
// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
  err ? console.error(err) : console.log('Success!')
); };


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();




