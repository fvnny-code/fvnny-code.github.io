import { skills } from "./data/skills.js";
import { createProgressBar } from "./components/progressBar.js";

// Ciblez le conteneur des compétences
const skillsContainer = document.querySelector(".skills-container");

skills.forEach((skill) => {
  const progressBar = createProgressBar(skill);
  skillsContainer.appendChild(progressBar);
});
