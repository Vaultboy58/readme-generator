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

   
  ]) .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios.get(queryUrl).then(function(res) {
      const repoNames = res.data.map(function(repo) {
        return repo.name;
      });

      const repoNamesStr = repoNames.join("\n");

      fs.writeFile("repos.txt", repoNamesStr, function(err) {
        if (err) {
          throw err;
        }

        console.log(`Saved ${repoNames.length} repos`);
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
  
 
