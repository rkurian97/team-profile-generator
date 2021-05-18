generateManager= manager => {
    return `
        <div class="card mt-3 ml-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${manager.name}</h5>
                <p class="card-text">Manager</p>
                <p class="card-text">ID: ${manager.id}</p>
                <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="card-text">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    `
}

generateMembers= members => {
    let memberHTML= ``;
    for (const member of members){
        if(member.getRole()== 'Intern'){
            memberHTML= memberHTML+ generateIntern(member);
        }else if (member.getRole()== 'Engineer'){
            memberHTML= memberHTML+ generateEngineer(member);
        }
    }
    return memberHTML
}


generateIntern= intern => {
    return `
        <div class="card mt-3 ml-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${intern.name}</h5>
                <p class="card-text">Intern</p>
                <p class="card-text">ID: ${intern.id}</p>
                <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="card-text">School: ${intern.school}</p>
            </div>
        </div>
    `
}

generateEngineer= engineer => {
    return `
        <div class="card mt-3 ml-3" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${engineer.name}</h5>
                <p class="card-text">Engineer</p>
                <p class="card-text">ID: ${engineer.id}</p>
                <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a> </p>
                <p class="card-text">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    `
}

// export function to generate entire page
module.exports = teamData => {
    const { manager, members } = teamData;
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
      <title>Team Profile</title>
    </head>
    
    <body>
        <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">My Team</span>
        </nav>

        ${generateManager(manager)}
        ${generateMembers(members)}

        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
  };
  