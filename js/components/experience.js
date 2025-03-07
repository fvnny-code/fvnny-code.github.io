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
          <p class="text-white"><span class="text-bright-turquoise">${experience.company}</span> - ${experience.location} - ${experience.period}</p>
          <p class="text-white">${experience.description}</p>
          ${tasksHTML}
          ${experience.extra ? `<p class="text-white">${experience.extra}</p>` : ""}
      `;
  
    return experienceContainer;
  }
  
  export function createFormationCard(formation) {
    const formationContainer = document.createElement("div");
    formationContainer.classList.add("col-12", "col-md-12");

    // Vérification si les données existent pour éviter les "undefined"
    const schoolInfo = formation.school ? `<span class="text-bright-turquoise">${formation.school}</span>` : "";
    const locationInfo = formation.location ? ` - ${formation.location}` : "";
    const periodInfo = formation.period ? ` - ${formation.period}` : "";
    const formationDetails = schoolInfo || locationInfo || periodInfo ? `<p class="text-white">${schoolInfo}${locationInfo}${periodInfo}</p>` : "";

    formationContainer.innerHTML = `
        <h3 class="fw-light fs-5 text-white">${formation.title} ${formation.level ? `(${formation.level})` : ""}</h3>
        ${formationDetails}
        ${formation.description ? `<p class="text-white">${formation.description}</p>` : ""}
    `;

    return formationContainer;
}