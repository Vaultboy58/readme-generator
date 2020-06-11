const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);{

 inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username"
    },
    {
      type: "input",
      name: "project-title",
      message: "What is the title of your project?"
    },
    {
      type: "input",
      name: "project-description",
      message: "What type of project is it?"
    },

   
  ]);
}
   
// All of the `createGreeting` functions are equivalent
var createGreeting = function(message, name) {
  return message + ", " + name + "!";
};

// We can safely swap out function expressions with arrow functions most of the time
var createGreeting = (message, name) => {
  return message + ", " + name + "!";
};

// If the arrow function body contains only one expression, we can omit the curly braces and auto return it
var createGreeting = (message, name) => message + ", " + name + "!";

// If an arrow function only has one parameter, we can omit the parens () around the single parameter
var greet = greeting => console.log(greeting);

// We call arrow functions the same way as we call regular functions
var greeting = createGreeting("Hello", "user");

// Logs "Hello, Angie!";
greet(greeting);



 promptUser()
   .then(function(answers) {
     var Node = generateNode(answers);

    return writeFileAsync("index.js", );
   })
   .then(function() {
     console.log("Successfully wrote in node");
   })
   .catch(function(err) {
     console.log(err);
   });

  
  function writeToFile(fileName, data) {
   }
  
 
