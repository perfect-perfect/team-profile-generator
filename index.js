const { writeFile, copyFile } = require('./src/generate-site');
const fs = require('fs');
const path = require('path')
const inquirer = require('inquirer');

const generatePage = require('./src/page-template');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const myTeam = []
// need funtions to generate  
const promptUser = () => {
    
    console.log('Start by creating your manager')
    function createManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Managers name? (Required)',
                // notice that the validate method recieves an argument, nameInput. this argument is the user's input
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    // if no response typed in the condition is false, the user receives a message and is prompted with the same question until an answer is received. (i take it that this loop is a result of the validate method)
                    else {
                        console.log('Please enter employees name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Manager ID? (Required)',
                // notice that the validate method recieves an argument, nameInput. this argument is the user's input
                validate: idInput => {
                    if (idInput) {
                        return true;
                    }
                    // if no response typed in the condition is false, the user receives a message and is prompted with the same question until an answer is received. (i take it that this loop is a result of the validate method)
                    else {
                        console.log('Please enter employee id!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Managers email? (Required)',
                // notice that the validate method recieves an argument, nameInput. this argument is the user's input
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    }
                    // if no response typed in the condition is false, the user receives a message and is prompted with the same question until an answer is received. (i take it that this loop is a result of the validate method)
                    else {
                        console.log('Please enter employee email!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'special',
                message: 'Managers office number? (Required)',
                // notice that the validate method recieves an argument, nameInput. this argument is the user's input
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    }
                    // if no response typed in the condition is false, the user receives a message and is prompted with the same question until an answer is received. (i take it that this loop is a result of the validate method)
                    else {
                        console.log('Please enter employee email!');
                        return false;
                    }
                }
            }
        ]).then((res)=>{
        const NewManager = new Manager(res.name, res.id, res.email, res.special);

        console.log(`This is the manager you created:`, NewManager)

        myTeam.push(NewManager)

        chooseRole()
        })
        ;
    }

    function chooseRole() {
        inquirer.prompt([{
            type: 'list',
            name: 'role',
            message: 'Choose a Role for your next Employee:',
            choices: ['Intern', 'Engineer' , 'Render']
        }]).then((res)=>{
            switch (res.role){
                // CREATE INTERN
                case 'Intern':
                    console.log('you chose an intern');
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: 'Intern name? (Required)',
                            // notice that the validate method recieves an argument, nameInput. this argument is the user's input
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                }
                                // if no response typed in the condition is false, the user receives a message and is prompted with the same question until an answer is received. (i take it that this loop is a result of the validate method)
                                else {
                                    console.log('Please enter intern name!');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'id',
                            message: 'Intern ID? (Required)',
                            // notice that the validate method recieves an argument, nameInput. this argument is the user's input
                            validate: idInput => {
                                if (idInput) {
                                    return true;
                                }
                                // if no response typed in the condition is false, the user receives a message and is prompted with the same question until an answer is received. (i take it that this loop is a result of the validate method)
                                else {
                                    console.log('Please enter employee id!');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: 'Intern email? (Required)',
                            // notice that the validate method recieves an argument, nameInput. this argument is the user's input
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                }
                                // if no response typed in the condition is false, the user receives a message and is prompted with the same question until an answer is received. (i take it that this loop is a result of the validate method)
                                else {
                                    console.log('Please enter intern email!');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'special',
                            message: 'Where did you go to school?',
                            validate: schoolInput => {
                                if (schoolInput) {
                                    return true;
                                }
                                // if no response typed in the condition is false, the user receives a message and is prompted with the same question until an answer is received. (i take it that this loop is a result of the validate method)
                                else {
                                    console.log('Please enter school!');
                                    return false;
                                }
                            }
                        }
                    ]).then((res) =>{
                        const newIntern = new Intern(res.name, res.id, res.email, res.special);
                        console.log(`This is the Intern you created:`, newIntern)
                        myTeam.push(newIntern)

                        chooseRole()
                    })
                    // This will be where the "createIntern" func will go
                    
                break;
                case 'Engineer':
                    console.log('you chose an Engineer');
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: 'Engineer name? (Required)',
                            // notice that the validate method recieves an argument, nameInput. this argument is the user's input
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                }
                                // if no response typed in the condition is false, the user receives a message and is prompted with the same question until an answer is received. (i take it that this loop is a result of the validate method)
                                else {
                                    console.log('Please enter Engineer name!');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'id',
                            message: 'Engineer ID? (Required)',
                            // notice that the validate method recieves an argument, nameInput. this argument is the user's input
                            validate: idInput => {
                                if (idInput) {
                                    return true;
                                }
                                // if no response typed in the condition is false, the user receives a message and is prompted with the same question until an answer is received. (i take it that this loop is a result of the validate method)
                                else {
                                    console.log('Please enter employee id!');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'email',
                            message: 'Engineer email? (Required)',
                            // notice that the validate method recieves an argument, nameInput. this argument is the user's input
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                }
                                // if no response typed in the condition is false, the user receives a message and is prompted with the same question until an answer is received. (i take it that this loop is a result of the validate method)
                                else {
                                    console.log('Please enter Engineer email!');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'special',
                            message: 'Engineer GitHub username?',
                            validate: usernameInput => {
                                if (usernameInput) {
                                    return true;
                                }
                                // if no response typed in the condition is false, the user receives a message and is prompted with the same question until an answer is received. (i take it that this loop is a result of the validate method)
                                else {
                                    console.log('Please enter school!');
                                    return false;
                                }
                            }
                        }
                    ]).then((res) =>{
                        const newEngineer = new Engineer(res.name, res.id, res.email, res.special);
                        console.log(`This is the Engineer you created:`, newEngineer);
                        myTeam.push(newEngineer);
                        console.log(myTeam);

                        chooseRole();
                    })

                    console.log('you chose an Engineer')
                break;
                case 'Render':
                  teamRender()
                break;
            }
        })
    }
    // Put the rest of yuor functions below this



    function teamRender(){
        fs.writeFile('./dist/index.html', generatePage(myTeam), err => {
            if (err) throw err;
            console.log('success!');
        })
    }


    // function teamRender(){
    //     if (!fs.existsSync('./dist')) {
    //         fs.mkdirSync('./dist')
    //     }
    //     fs.writeFileSync('./dist',generatePage(myTeam), 'utf-8')
    // }
    createManager()
};

promptUser()
    // .then(employeeData => {
    //     // this sends to page-template.js which creates the template literal
    // //     return generatePage(employeeData);
    // })
    // .then(pageHTML => {
    //     return writeFile(pageHTML)
    // })