const fs = require('fs');
const path = require('path')
const inquirer = require('inquirer');

const generatePage = require('./src/page-template');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const myTeam = []

const promptUser = () => {
    
    console.log('Start by creating your manager')
    function createManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Managers name? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
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
                validate: idInput => {
                    if (idInput) {
                        return true;
                    }
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
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    }
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
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    }
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
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                }
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
                            validate: idInput => {
                                if (idInput) {
                                    return true;
                                }
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
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                }
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
                // CREATE ENGINEER
                case 'Engineer':
                    console.log('you chose an Engineer');
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: 'Engineer name? (Required)',
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                }
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
                            validate: idInput => {
                                if (idInput) {
                                    return true;
                                }
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
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                }
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

                break;
                case 'Render':
                  teamRender();
                  cssRender();
                break;
            }
        })
    }


    // RENDER HTML
    function teamRender(){
        fs.writeFile('./dist/index.html', generatePage(myTeam), err => {
            if (err) throw err;
            console.log('html success!');
        })
    }

    // RENDER CSS
    function cssRender(){
        fs.copyFile('./src/style.css', './dist/style.css' , err => {
            if (err) {
                reject(err);
                return;
            }
            console.log('css success!');
        });
    };

    createManager()
};

promptUser()