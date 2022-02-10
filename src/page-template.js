// Here i genereate the HTML

// i am going to jave to cycle through the employees i created to create their cards
// no idea how i will do this

// issue: i believe that map functions is screwing up because we are going through and array of objects, so these variables are attaching themselves to the objects, not the properties
const generateEmployees = employeeArr => {
    return `
        <section class="my-3" id="portfolio">
            <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
            <div class="flex-row justify-space-between">
            ${employeeArr.map(({ name, id, email, special, role}) => {
                    return `
                    <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
                        <h3 class="portfolio-item-title text-light">${name}</h3>
                        <h5 class="portfolio-languages">
                            ${role}
                        </h5>
                        <p>${email}</p>
                        <p>${special}</p>
                        <p>${id}</p>
                    </div>

                    `;
                })
            }

        </section>    
    `;
};
        


// name, id, email, special, role


module.exports = templateData => {
    const { projects } = templateData;
    console.log(templateData);
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        </header>
        <main class="container my-5">
            ${generateEmployees(projects)}
        </main>
    </body>
    </html>
    `;
};
