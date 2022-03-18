// Here i genereate the HTML and cycle through the array to create the cards
const generateEmployees = employeeArr => {
    return `
        <section class="my-3">
            <h2 class="text-dark bg-primary p-2 display-inline-block">My Team</h2>
            <div class="flex-row justify-space-between">
            ${employeeArr.map((worker) => {
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
