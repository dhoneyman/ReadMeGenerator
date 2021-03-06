function renderLicenseBadge(license) {
    if(license === ''){
        return;
    } else if(license === 'Public Domain Dedication and License (PDDL)'){
        return `[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)`
    } else if(license === 'MIT License'){
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if(license === 'Apache 2.0 License'){
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if(license === 'Boost Software License 1.0'){
        return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    } else {
        return ''
    }
}

function contribution(input) {
    if(input === undefined) {
        return 'Please visit the [Contributor Covenant](https://www.contributor-covenant.org/) to view our contributors guidelines.';
    } else {
        return input;
    }
}

function generateMarkdown(data) {
  return `# ${data.projectTitle}
  
## Description
  
  * Motivations - ${data.motivations}.
  * Reason for building - ${data.whyBuilt}.
  * Problem solved - ${data.problem}.
  * Lessons learned - ${data.lessons}
  
## Table of Contents
  
 - [Installation](#installation)
 - [Usage](#usage)
 - [License](#license)
 - [Contributing](#Contributing)
 - [Tests](#tests)
 - [Questions](#questions)

## Installation

${data.installation}

## Usage

 * ${data.usage}
  
  ![${data.altText}](${data.photoPath})
  ![${data.altText2}](${data.photoPath2})
  
## License
    
 -${data.license}
 -${renderLicenseBadge(data.license)}

## Contributing
  
 * ${contribution(data.contribution)}

## Tests

 * ${data.test}

## Questions

 * For questions regarding this software, please reach out to me on [GitHub](${data.github})

## Collaborators

- [${data.collaborator}](${data.collabGitHub})
- [${data.collaborator2}](${data.collabGitHub2})

`;
}

module.exports = generateMarkdown;