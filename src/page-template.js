// create the manager
const generateManager = manager => { // do I need () in ${}?
    return `
    <div class="card card-body">
                <h2 class="card-title">${manager.getName()}<br></h2> 
                <span class="card-subtitle mb-2 text-muted"><i class="fas fa-user-circle"></i> ${manager.getRole()} <br><br></span>
                <p class="card-text">Employee ID: ${manager.getId()} <br> Office Number: ${manager.getOfficeNumber()}</p>
                <a href="mailto" class="card-link">${manager.getEmail()}</a>
            </div>  
    `


}
// create the engineer
const generateEngineer = engineer => {
    return `
    <div class="card card-body">
    <h2 class="card-title">${engineer.getName()}<br></h2>
    <span class="card-subtitle mb-2 text-muted"><i class="fas fa-cog"></i> ${engineer.getRole()} <br><br>
    </span>
    <p class="card-text">${engineer.getId()} <br>Office Number: ${engineer.getOfficeNumber()}</p>
    <a href="mailto" class="card-link">${engineer.getEmail()}</a>
    <a href="${engineer.getGitHub()}" target="_blank" class="card-link">GitHub</a>
</div>
 `

}

// create the intern
const generateIntern = intern => {
    return `
    
    <div class="card card-body">
    <h2 class="card-title">${intern.getName()}<br></h2>
    <span class="card-subtitle mb-2 text-muted"><i class="fas fa-user-graduate"></i> ${intern.getRole()}<br><br></span>
    <p class="card-text">Employee ID: ${intern.getId()} <br> Office Number: ${intern.getOfficeNumber()} <br>${intern.getSchool()}</p>
    <a href="mailto" class="card-link">${intern.getEmail()}</a>
</div>
    `

}

// generate page


// use bootstrap card, copy and paste ${manager.getId}

// function generateStaff, container, header, as location for the above
const generateStaff = staff => {
    generateManager();
    generateEngineer();
    generateIntern();
    module.exports = staff => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Jessica's Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/35845d597d.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="styles.css">
    </head>
    
    <body>
        <nav class="navbar navbar-light bg-info">
            <span class="navbar-brand mb-0 h1 mx-auto">My Team</span>
        </nav>

        <div class="container-fluid py-2">
        <div class="d-flex flex-row flex-nowrap">

    ${generateStaff(staff)}

    </div>
    </div>



</body>

</html>
    
    `
}
};