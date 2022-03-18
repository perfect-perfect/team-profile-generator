// Here i genereate the HTML

// i am going to jave to cycle through the employees i created to create their cards
// no idea how i will do this

// issue: i believe that map functions is screwing up because we are going through and array of objects, so these variables are attaching themselves to the objects, not the properties
// const generateEmployees = employeeArr => {
//     // console.log('this is from generateEmployee:',employeeArr)
//     return `
//         <section class="my-3" id="portfolio">
//             <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
//             <div class="flex-row justify-space-between">
//             ${employeeArr.forEach(element => {
//                     console.log('This from employeeArr:', element)
//                     return `
//                     <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
//                         <h3 class="portfolaio-item-title text-light">${element.name}</h3>
//                         <h5 class="portfolio-languages">
//                             ${element.getRole()}
//                         </h5>
//                         <p>${element.email}</p>
//                         <p>${element.special}</p>
//                         <p>${element.id}</p>
//                     </div>
//                     `;
//             })
//             }

//         </section>    
//     `;
// };

const generateEmployees = employeeArr => {
    // console.log('this is from generateEmployee:',employeeArr)
    return `
        <section class="my-3">
            <h2 class="text-dark bg-primary p-2 display-inline-block">My Team</h2>
            <div class="flex-row justify-space-between">
            ${employeeArr.map((worker) => {
                    // console.log('This from employeeArr:', element)
                    return `
                    <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                        <h3 class="text-light">${worker.name}</h3>
                        <h5 class="worker-info">
            
                        </h5>
                        <p>${worker.getRole()}</p>
                        <p>${worker.id}</p>
                        <a href = "mailto: ${worker.email}">${worker.email}</a>
                        <p>${worker.getSpecial()}<p>
                    </div>
                    `;
            })
            }

        </section>    
    `;
};
        


// name, id, email, special, role


module.exports = templateData => {
    console.log('This is from the template:', templateData);
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        </header>
        <main class="container my-5">
            ${generateEmployees(templateData)}
        </main>
    </body>
    </html>
    `;
};
