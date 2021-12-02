// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  
## Description
  
  * Motivations - ${data.motivations}.
  * Reason for building - ${data.whyBuilt}.
  * Problem solved - ${data.roblem}.
  * Lessons learned - ${data.lessons}
  
## Table of Contents
  
-Installation (#installation)
-Usage (#usage)
-License (#license)
-Contributing 
-Tests
-Questions

## Installation

${data.installation}

## Usage

  ** ${data.usage}

``md
![${data.altText}](${data.photoPath})
  
## Credits

#Collaborators

- [${collaborator}](${collabGitHub})
`;
}

module.exports = generateMarkdown;