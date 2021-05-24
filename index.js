const inquirer = require("inquirer"); 
const fs = require("fs"); 
const questions = require("./questions.js"); 
let date; 


const generateCoverLetter = (answers) => 
`${answers.fullName}

${answers.phone}

${answers.email}

${date}

Dear Hiring Manager,

I'm excited to be applying for the ${answers.position} position at ${answers.company}. With software development, there is always something new to discover. Designing a program that is truly helpful to the user is my ultimate goal on every project, and I am delighted by the opportunity to apply my knowledge at ${answers.company}, ${answers.known}.

During my , I provided support for a role-oriented parts management system that allowed the users to track parts, jobs, tasks, statistics and other job and employee data. This system is utilized by an Air Force depot to track all progress on the parts and labor required to repair and supply airplanes. As part of my duties, I provided enhancements to the program and also provided immediate solutions to unexpected problems.

When I was appointed to design an online version of the hardcopy workbook used by the maintenance and repair technicians for job tracking, I successfully led the team in certain tasks and followed direction from the team leader for other requirements. The implementation of the online workbook resulted in a 25% faster completion time for measurable tasks the following year.

Thank you for your time and consideration. I'm looking forward to learning more about the Software Developer position and about Cloud Clearwater. As a Software Developer, my goal is to continually increase my programming skills in order to present better solutions to my employers and their clients. If I am offered this position, I will be ready to hit the ground running and help ${answers.company} exceed its own expectations for success.

Sincerely,

Sofia Flores`; 

inquirer
    .prompt(questions)
    .then((answers) => {
        const file = ; 

        fs.writeFile(file, generateCoverLetter(answers), (err) => 
        err ? console.log(err) : console.log("Success!! Whoohoo!!")
        ); 
    }); 