const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile} = require('./utils/generate-site');
const Manager = require('./lib/Manager');
const Intern= require('./lib/Intern');
const Engineer= require('./lib/Engineer');


const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name (The manager)? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the manager!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'What is your id? (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number? (Required)',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('Please enter an office number!');
                    return false;
                }
            }
        }
    ]);
}

const promptMember = (teamData) => {

    return inquirer.prompt([
        {
            type: 'list',
            name: 'newMember',
            message: 'Would you like to add an Intern, Engineer, or end (Required)',
            choices: ["Intern", "Engineer", "quit"]
          }
    ])
    .then((response)=>{
        if (response.newMember == "Intern"){
           return promptIntern(teamData);
        }else if (response.newMember == "Engineer"){
          return  promptEngineer(teamData);
        }else{
            return teamData;
        }

    });
}

const promptIntern= (teamData) =>{
    console.log(`
    =================
    Add a New Member
    =================
    `);
    // If there's no 'projects' array property, create one
    if (!teamData.members) {
        teamData.members = [];
    }
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is their name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the intern name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'What is their id? (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter their id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter their email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is their school? (Required)',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter their school!');
                    return false;
                }
            }
        }
    ])
    .then( response=> {
        const intern= new Intern(response.name, response.email, response.employeeID, response.school)
        teamData.members.push(intern);
        return promptMember(teamData);
    });
}

const promptEngineer= (teamData) =>{
    console.log(`
    =================
    Add a New Member
    =================
    `);
    // If there's no 'projects' array property, create one
    if (!teamData.members) {
        teamData.members = [];
    }
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is their name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the engineer name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'What is their id? (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter their id!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter their email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is their github? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter their github!');
                    return false;
                }
            }
        }
    ])
    .then( response=> {
        const engineer= new Engineer(response.name, response.email, response.employeeID, response.github)
        teamData.members.push(engineer);
        return promptMember(teamData);
    });
}


promptManager()
    .then(data =>{
        const manager= new Manager(data.name, data.email, data.employeeID, data.officeNumber)
        const teamData= {manager: manager}
        return promptMember(teamData);
    })
    .then(teamData =>{
        return generatePage(teamData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
    