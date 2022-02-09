const { writeFile, copyFile } = require('./src/generate-site');

const inquirer = require('inquirer');

const generatePage = require('./src/page-template');


// need funtions to generate  
const promptUser = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Employee name? (Required)',
            // notice that the validate method recieves an argument, nameInput. this argument is the user's input
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                // if no response typed in the condition is false, the user receives a message and is prompted with the same question until an answer is received. (i take it that this loop is a result of the validate method)
                else {
                    console.log('Please enter employee name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Employee ID? (Required)',
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
            message: 'Employee email? (Required)',
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
    ]);

    
        
};

promptUser()
    .then(employeeData => {
        return generatePage(employeeData); 
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })