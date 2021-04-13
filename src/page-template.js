 // create the manager
const generateManager = (manager) => {
   
    return `
      <div class="card card-body">
                  <h2 class="card-title">${manager.getName()}<br></h2> 
                  <span class="card-subtitle mb-2 text-muted"><i class="fas fa-user-circle"></i> ${manager.getRole()} <br><br></span>
                  <p class="card-text">Employee ID: ${manager.getId()} <br> Office Number: ${manager.getOfficeNumber()}</p>
                  <a href="mailto:${manager.getEmail()}" class="card-link">${manager.getEmail()}</a>
              </div>  
      `;
  };
  // create the engineer
  const generateEngineer = (engineer) => {
    return `
      <div class="card card-body">
      <h2 class="card-title">${engineer.getName()}<br></h2>
      <span class="card-subtitle mb-2 text-muted"><i class="fas fa-cog"></i> ${engineer.getRole()} <br><br>
      </span>
      <p class="card-text">Employee ID: ${engineer.getId()} <br>
      <a href="mailto:${engineer.getEmail()}" class="card-link">${engineer.getEmail()}</a>
      <a href="https://github.com/${engineer.getGitHub()}" target="_blank" class="card-link">GitHub</a>
  </div>
   `;
  };
  
  // create the intern
  const generateIntern = (intern) => {
    return `
      
      <div class="card card-body">
      <h2 class="card-title">${intern.getName()}<br></h2>
      <span class="card-subtitle mb-2 text-muted"><i class="fas fa-user-graduate"></i> ${intern.getRole()}<br><br></span>
      <p class="card-text">Employee ID: ${intern.getId()} <br>${intern.getSchool()}</p>
      <a href="mailto:${intern.getEmail()}" class="card-link">${intern.getEmail()}</a>
  </div>
      `;
  };
 
  // function generateStaff to create page
 const generateStaff = (staff) => {
    console.log("Staff: ", staff)
    let output = "";
  let managers= [];
  let engineers=[];
  let interns=[];

  staff.forEach((unit) => {
      console.log(unit.getRole())
    switch (unit.getRole()) {
      case "Manager":
          managers.push(unit);
        break;
      case "Engineer":
        engineers.push(unit);
        break;
      case "Intern":
        interns.push(unit);
        break;
        default:
            console.log("OH NO! ERROR")
    }
  });

  output +=`
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <script src="https://kit.fontawesome.com/35845d597d.js" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="../dist/styles.css">
  </head>
  
  <body>
      <nav class="navbar navbar-light bg-info">
          <span class="navbar-brand mb-0 h1 mx-auto">My Team</span>
      </nav>

      <div class="container-fluid py-2">
      <div class="d-flex flex-row flex-nowrap">

</body>

</html>
  
  `;

  managers.forEach(manager => {
   output += generateManager(manager);
  });

  engineers.forEach(engineer => {
    output += generateEngineer(engineer);
   });

   interns.forEach(intern => {
    output += generateIntern(intern);
   });
  
  

  

    return output
};

 
  
  module.exports = {
    generateStaff: generateStaff,
  };