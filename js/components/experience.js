export function createExperienceCard(experience) {
    const experienceContainer = document.createElement("div");
    experienceContainer.classList.add("col-12", "col-md-11");
  
    let tasksHTML = "";
    if (experience.tasks) {
      tasksHTML = `<ul class="text-white">`;
      experience.tasks.forEach((task) => {
        tasksHTML += `<li class="text-white">${task}</li>`;
      });
      tasksHTML += `</ul>`;
    }
  
    experienceContainer.innerHTML = `
          <h3 class="fw-light fs-5 text-white">${experience.title}</h3>
          <p class="text-white"><span class="text-teal">${experience.company}</span> - ${experience.location} - ${experience.period}</p>
          <p class="text-white">${experience.description}</p>
          ${tasksHTML}
          ${experience.extra ? `<p class="text-white">${experience.extra}</p>` : ""}
      `;
  
    return experienceContainer;
  }
  
  export function createFormationCard(formation) {
    const formationContainer = document.createElement("div");
    formationContainer.classList.add("col-12", "col-md-12");
  
    formationContainer.innerHTML = `
          <h3 class="fw-light fs-5 text-white">${formation.title} ${formation.level ? `(${formation.level})` : ""}</h3>
          <p class="text-white"><span class="text-teal">${formation.school}</span> - ${formation.location} - ${formation.period}</p>
          ${formation.description ? `<p class="text-white">${formation.description}</p>` : ""}
      `;
  
    return formationContainer;
  }