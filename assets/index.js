// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Enter the title of your project:',
    name: 'title'
  },
  {
    type: 'input',
    message: 'Enter a description of your project:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What is the installation instruction?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'What is the usage information?',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'What are the contribution guidelines?',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'What is the command to run tests?',
    name: 'tests',
  },
  {
    type: 'list',
    message: 'Please select the licence for your project:',
    name: 'license',
    choices: ['Artistic License', 'Creative Commons', 'MIT', 'None']
  },
  {
    type: 'input',
    message: 'Please enter your Github username:',
    name: 'username',
  },
  {
    type: 'email',
    message: 'Enter your email address:',
    name: 'email',
  },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Thank you. Your README file has been created.'))
}


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response)
    writeToFile('README.md', generateMarkdown(response))
  })
}


// Function call to initialize app
init();
