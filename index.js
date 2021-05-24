const inquirer = require("inquirer"); 
const fs = require("fs"); 
const questions = require("./questions.js"); 



const generateCoverLetter = (answers) => 
`${answers.fullName}

${answers.phone}

${answers.email}

${answers.date}

Dear Hiring Manager,

    I'm excited to be applying for the ${answers.position} position at ${answers.company}. With software development, there is always something new to discover. 
Designing a program that is truly helpful to the user is my ultimate goal on every project, and I am delighted by the opportunity to apply my knowledge at ${answers.company}, ${answers.known}.

    I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are 
important to me and the success of your organization. 

    Your listed requirements closely match my background and skills. A few I would like to highlight that would enable me to contribute to your bottom lines are: 

    * ${skill1}
    * ${skill2}
    * ${skill3}


    Thank you for your time and consideration. I'm looking forward to learning more about the ${answers.position} position and about ${answers.company}.  I've attached a copy of my resume
that details my projects and experience. I can be reached anytime via my cellphone, ${answers.phone} or via email at ${answers.email}. If I am offered this position, I will be ready to 
hit the ground running and help ${answers.company} exceed its own expectations for success.

Sincerely,

${answers.fullName}`; 

inquirer
    .prompt(questions)
    .then((answers) => {
        const file = ; 

        fs.writeFile(file, generateCoverLetter(answers), (err) => 
        err ? console.log(err) : console.log("Success!! Whoohoo!!")
        ); 
    }); 