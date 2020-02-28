const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "git",
        message: "What is your GitHub username?"
      },
      {
        type: "input",
        name: "location",
        message: "Where are you from?"
      },
      {
        type: "input",
        name: "hobby",
        message: "What is your favorite hobby?"
      },
      {
        type: "input",
        name: "food",
        message: "What is your favorite food?"
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username"
      },
      {
        type: "input",
        name: "linkedin",
        message: "Enter your LinkedIn URL."
      }
    ]);
  }
  
    function generateHTML(answers) {
    return `
    ## ${answers.project}
    ### by username: ${answers.git}

    ## Description
    ${answers.description}

    ## Table of Contents
    ${answers.cotents}

    ## Installation
    ${answers.install}

    ## Usage
    ${answers.install}

    ## Contributing
    ${answers.install}

    ## Tests
    ${answers.install}

    ## Questions
    ${answers.install}
  `;

  
  }

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
// promptUser()
//   .then(function(answers) {
//     const html = generateHTML(answers);

//     return writeFileAsync("index.html", html);
//   })
//   .then(function() {
//     console.log("Successfully wrote to index.html");
//   })
//   .catch(function(err) {
//     console.log(err);
//   });


inquirer
  .prompt({
    message: "Enter your GitHub username:",
    name: "username"
  })
  .then(function({ username }) {
    

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


  const queryUrl = `https://api.github.com/users/${answers.username}/repos${answers.project}`;
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {

      // Log the queryURL
      console.log(queryURL);

      // Log the resulting object
      console.log(response);