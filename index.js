const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "git",
        message: "What is your GitHub username?"
      },
      {
        type: "input",
        name: "project",
        message: "Where is the name of your project?"
      },
    ]);
  }
  
function generateMD(answers) {
    return `
    # ${answers.project}
    ### by username: ${answers.git}

    ## Description
    ${answers.description}

    ## Table of Contents
    ${answers.contents}

    ## Installation
    ${answers.install}

    ## Usage
    ${answers.use}

    ## Contributing
    ${answers.contr}

    ## Tests
    ${answers.tests}

    ## Questions
    ${answers.q}
    `;
}
promptUser()
  .then(function(answers) {
    const queryUrl = `https://api.github.com/repos/${answers.git}/${answers.project}`
    const data = generateMD(answers);

    return writeFileAsync("README.md", data);
  })
  .then(function() {
    console.log("Successfully wrote to README.md");
  })
  .catch(function(err) {
    console.log(err);
  });

/////////////////////////////////////////////////////////

  // * At least one badge
  // * Project title
  // * Description
  // * Table of Contents
  // * Installation
  // * Usage
  // * License
  // * Contributing
  // * Tests
  // * Questions
  
  // inquirer
  //   .prompt({
  //     message: "Enter your GitHub username:",
  //     name: "username"
  //   })
  //   .then(function({ username }) {
      
  
  //     axios.get(queryUrl).then(function(res) {
  //       const repoNames = res.data.map(function(repo) {
  //         return repo.name;
  //       });
  
  //       const repoNamesStr = repoNames.join("\n");
  
  //       fs.writeFile("repos.txt", repoNamesStr, function(err) {
  //         if (err) {
  //           throw err;
  //         }
  
  //         console.log(`Saved ${repoNames.length} repos`);
  //       });
  //     });
  //   });
  
  promptUser()
  //   .then(function(answers) {
  //     const data = generateMD(answers);
  
  //     return writeFileAsync("README.md", data);
  //   })
  //   .then(function() {
  //     console.log("Successfully wrote to README.md");
  //   })
  //   .catch(function(err) {
  //     console.log(err);
  //   });
  
  function init(){
  inquirer
    .prompt({
      message: "Enter your GitHub username:",
      name: "username"
    })
    .then(function({ username }) {
      const queryUrl = `https://api.github.com/repos/${answers.git}/${answers.project}`;
  
      axios
      .get(queryUrl)
      .then(function(res) {
        console.log(res);
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
  }
  
      // const queryUrl = `https://api.github.com/repos/${answers.git}/${answers.project}`;
      // axios
      // promptUser()
      // .get(queryUrl, data)
      // .then(function(res) {
      //     // const { github } = res.data;
      //     console.log(res);
      //     // appendFileAsync("jokes.txt", joke + "\n").then(function() {
      //     //     readFileAsync("jokes.txt", "utf8").then(function(data) {
      //     //     console.log("Saved dad jokes:");
      //     //     console.log(data);
      //     //     });
      //     // });
      //     })
      // .catch(function(err) {
      // console.log(err);
      // });
  
      // }
  
  init();
  
  //   const queryUrl = `https://api.github.com/users/${answers.username}/repos/${answers.project}`;
  
  // });