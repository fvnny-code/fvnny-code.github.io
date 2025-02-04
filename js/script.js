import { skills } from "./data/skills.js";
import { createProgressBars } from "./components/progressBar.js";
import { portfolioData } from "./data/portfolioData.js";
import { createProjectCard, createProjectModal } from "./components/card.js";
import { experiences, formations } from "./data/experiences.js";
import { createExperienceCard, createFormationCard } from "./components/experience.js";

// Ciblez le conteneur des compétences
const skillsContainer = document.querySelector(".skills-container");
// Générer toutes les barres de progression avec séparation
createProgressBars(skills);

// Générer dynamiquement les expériences
const experiencesContainer = document.querySelector("#experiences .row");

if (!experiencesContainer) {
    console.error("⚠️ L'élément #experiences .row n'a pas été trouvé dans le DOM.");
} else {
    experiences.forEach((experience) => {
        const experienceCard = createExperienceCard(experience);
        experiencesContainer.appendChild(experienceCard);
    });
}

// Générer dynamiquement les formations
const formationsContainer = document.querySelector("#formations .row");
formations.forEach((formation) => {
  const formationCard = createFormationCard(formation);
  formationsContainer.appendChild(formationCard);
});


const portfolioContainer = document.querySelector("#portfolio .row");

portfolioData.forEach(project => {
    const card = createProjectCard(project);
    const modal = createProjectModal(project);

    portfolioContainer.appendChild(card);
    document.body.appendChild(modal); // Ajout des modales en dehors du conteneur
});