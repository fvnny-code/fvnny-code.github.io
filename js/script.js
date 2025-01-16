import { skills } from "./data/skills.js";
import { createProgressBar } from "./components/progressBar.js";
import { portfolioData } from "./data/portfolioData.js";
import { createProjectCard, createProjectModal } from "./components/card.js";


// Ciblez le conteneur des compétences
const skillsContainer = document.querySelector(".skills-container");

skills.forEach((skill) => {
  const progressBar = createProgressBar(skill);
  skillsContainer.appendChild(progressBar);
});

const portfolioContainer = document.querySelector("#portfolio .row");

portfolioData.forEach(project => {
    const card = createProjectCard(project);
    const modal = createProjectModal(project);

    portfolioContainer.appendChild(card);
    document.body.appendChild(modal); // Ajout des modales en dehors du conteneur
});