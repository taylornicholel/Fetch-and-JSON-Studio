// TODO: add code here 
window.addEventListener('load', function() {
    // object for container
    const container = document.getElementById('container');


    // first should fetch from legacy code
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(funtion(response) {
        response.json().then(fuction(data) {
            console.log(data); 

            for (let i=0; i <data.length; i++) {
                let astronaunt = data[i]
                container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${astronaunt.firstName} ${astronaunt.lastName} </h3>
                        <ul>
                            <li>Hours in space: ${astronaunt.hoursInSpace}</li>
                            <li>Active: ${astronaunt.active}</li>
                            <li>Skills: ${astronaunt.skills.join(", ")} </li>
                        </ul>
                    </div>
                    <img class="avatar" src="${astronaunt.picture}">
                    </div>
                `;
            }
        });
    })
});