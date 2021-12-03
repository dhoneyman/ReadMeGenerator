
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./generateMarkdown');
const questions = inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "projectTitle",
    },
    {
      type: "input",
      message: "Please provide your motivations for this project",
      name: "motivations",
    },
    {
      type: "input",
      message: "Why did you build this project?",
      name: "whyBuilt",
    },
    {
      type: "input",
      message: "What problem does this project solve?",
      name: "problem",
    },
    {
      type: "input",
      message:
        "What leasons did you learn in the process of completing this project?",
      name: "lessons",
    },
    {
      type: "input",
      message: "Please provide installation instructions.",
      name: "installation",
    },
    {
      type: "input",
      message: "Please provide instructions and examples for use.",
      name: "usage",
    },
    {
      type: "confirm",
      message: "Would you like to license your software?",
      name: "licenseConfirm",
    },
    {
      type: "list",
      message: "What type of license would you like to attach to this project?",
      choices: ['Public Domain Dedication and License (PDDL)', 'MIT License' , 'Apache 2.0 License' , 'Boost Software License 1.0'],
      name: "license",
      when: data => data.licenseConfirm === true
    },
    {
      type: "input",
      message: "Please input any instructions for testing here.",
      name: "test",
    },
    {
      type: "list",
      message: "Would you like to adopt contributor guidelines from the Contributors Covenant or adopt your own?",
      name: "contributorCovenant",
      choices: ['Adopt Contributors Covenant guidelines','Provide contribution guidelines']
    },
    {
      type: "input",
      message: "Please provide any contribution guidelines here",
      name: "contribution",
      when: data => data.contributorCovenant === 'Provide contribution guidelines'
    },
    {
      type: "confirm",
      message: "Do you have a screen shot of the project to provide?",
      name: "photo",
      default: false,
    },
    {
      type: "input",
      message: "Please provide the photo alt text.",
      name: "altText",
      when: (data) => data.photo === true,
    },
    {
      type: "input",
      message: "Please provide the path for the photo.",
      name: "photoPath",
      when: (data) => data.photo === true,
    },
    {
      type: "confirm",
      message: "Do you have another screen shot of the project to provide?",
      name: "photo2",
      default: false,
      when: data => data.photo === true
    },
    {
      type: "input",
      message: "Please provide the photo alt text.",
      name: "altText2",
      when: (data) => data.photo2 === true,
    },
    {
      type: "input",
      message: "Please provide the path for the photo.",
      name: "photoPath2",
      when: (data) => data.photo2 === true,
    },
    {
      type: "confirm",
      message: "Did you have any collaborators on this project?",
      name: 'collaboratorConfirmation',
      default: false
    },
    {
      type: "input",
      message: "Please input your collaborators name here.",
      name: 'collaborator',
      when: (data) => data.collaboratorConfirmation === true,
    },
    {
      type: "input",
      message: "Please input the link to your collaborators GitHub profile here.",
      name: 'collabGitHub',
      when: (data) => data.collaboratorConfirmation === true,
    },
    {
      type: "confirm",
      message: "Did you have another collaborator on this project?",
      name: 'collaboratorConfirmation2',
      default: false,
      when: (data) => data.collaboratorConfirmation === true
    },
    {
      type: "input",
      message: "Please input your collaborators name here.",
      name: 'collaborator2',
      when: (data) => data.collaboratorConfirmation2 === true,
    },
    {
      type: "input",
      message: "Please input the link to your collaborators GitHub profile here.",
      name: 'collabGitHub2',
      when: (data) => data.collaboratorConfirmation2 === true,
    },
    {
      type: "input",
      message: "Please provide the url to your GitHub profile page.",
      name: "github",
    },
    
    
    
])
.then((data) => {
    writeToFile(data);
    // inquirer.prompt([ {
    //   type: "confirm",
    //   message: "Do you have another screen shot of the project to provide?",
    //   name: "additionalPhoto",
    // },
    // {
    //   type: "input",
    //   message: "Do you have another screen shot of the project to provide?",
    //   name: "additionalPhoto",
    // },])
  });
// TODO: Create a function to write README file

function writeToFile(data) {
  fs.writeFile('README.md', generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}


