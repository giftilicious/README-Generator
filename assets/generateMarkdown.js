// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license==='None') {
    return ""
  } else {
    return `[![License](https://img.shields.io/badge/License-${license.replace(' ','_')}-orange.svg)](https://opensource.org/licenses/${license.replace(' ','_')})

    `
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if(license==='None') {
    return ""
  } else {
    return '* [License](#License)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license==='None') {
    return ""
  } else {
    return `## License
    ${license}`
  }
  

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)} 
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at ${data.username}.
  `
};
  
module.exports = generateMarkdown;