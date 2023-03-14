const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        message: 'what is your name?',
        name: 'name',

    },
    {
        type: 'input',
        message: 'Where do you live?',
        name: 'location',
    },
    {
        type: 'editor',
        message: 'Provide a little bit of information about yourself',
        name: 'bio',
    },
    {
        type: 'input',
        message: 'What is your username on LinkedIn?',
        name: 'linkedinID',
    },
    {
        type: 'input',
        message: 'what is the name of your GitHub profile?',
        name: 'gitHub',
    },
    //https://www.linkedin.com/in/username/ (linkedin url template)
])
.then((answers) => {
    console.log(answers);
    const linkedinURL = `https://www.linkedin.com/in/${answers.linkedinID}/`;
    const gitHubURL = `http://github.com/${gitHub}/`
    console.log (`Your LinkedInURL is: ${linkedinURL}`)
    console.log(`Your GitHubURL is : ${gitHubURL});
});


// let portfolioInfo = ``;

// function init
// fs.writeFile('log.txt', portfolioInfo, (err) =>
//     err ?   console.error(err) : console.log('success')
// );