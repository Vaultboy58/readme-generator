const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);{

var questions = [];


function init() {

}

init();

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
    {
      type: "input",
      name: "school-question",
      message: "Which school did you go to?"
    },

    {
      type: "input",
      name: "occupation-question",
      message: "Where do you work?"
    },

   
  ]) .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios.get(queryUrl).then(function(res) {
       const username = res.data.map(function(user) {
        return user.name;
      });

      const username = username.join("\n")

      fs.writeFile("username.txt", username, function(err) {
        if (err) {
          throw err;
        }

        console.log(`Saved ${username.length} user`);
      });
    });
  });

};
  

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
  
 
