export function createProjectCard(project) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add(
    "col-xs-12",
    "col-sm-6",
    "col-md-4",
    "col-lg-3",
    "mt-3"
  );

  const hashtags = project.hashtags.join(" ");

  // Utilisation d'un opérateur ternaire pour choisir le média (image ou iframe)
  const mediaElement =
    project.type === "image"
      ? `<img src="${project.media}" class="card-img-top" alt="${project.title}">`
      : `<iframe class="embed-responsive-item card-img-top" 
                   title="vidéo de présentation de ${project.title}" 
                   src="${project.media}" 
                   allowfullscreen></iframe>`;

  // Construction de la carte
  cardContainer.innerHTML = `
        <div class="card h-100">
            ${mediaElement}
            <div class="card-body d-flex flex-column justify-content-between">
                <h3 class="card-title">${project.title}</h3>
                <p class="card-text">${project.description}</p>
                <span><em>${hashtags}</em></span>
                <button type="button" class="btn btn-outline w-75" data-bs-toggle="modal" data-bs-target="#modal-${project.title.replace(
                  /\s/g,
                  ""
                )}">
                    En savoir +
                </button>
            </div>
        </div>
    `;

  return cardContainer;
}
export function createProjectModal(project) {
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal", "fade");
  modalContainer.id = `modal-${project.title.replace(/\s/g, "")}`;
  modalContainer.setAttribute("tabindex", "-1");
  modalContainer.setAttribute("aria-labelledby", `modalLabel-${project.title}`);
  modalContainer.setAttribute("aria-hidden", "true");

  const technologies = project.modalContent.technologies
    .map((tech) => {
      if (tech.icon) {
        return `
        <i class="fab ${tech.icon} fa-2x me-3 text-teal"></i>`;
      } else if (tech.image) {
        return `<img src="${tech.image}" alt="${tech.name}" class="me-3" style="width: 32px;">`;
      }
      return "";
    })
    .join("");

  const steps = project.modalContent.steps
    .map((step) => `<li>${step}</li>`)
    .join("");
  // Gestion conditionnelle des boutons GitHub et Live avec icônes
  const githubButton = project.githubLink
    ? `<div class="git-link d-flex align-items-center border-end">
        <a href="${project.githubLink}" target="_blank" class="text-decoration-none text-teal">
            <i class="bi bi-github me-2" style="font-size: 1.8rem;"></i> GitHub
        </a>
    </div>
    `
    : "";

  const liveButton = project.liveLink
    ? `<div class="git-link d-flex align-items-center border-start">
        <a href="${project.liveLink}" target="_blank" class="text-decoration-none text-teal">
            <i class="bi bi-globe2 me-2" style="font-size: 1.8rem;"></i> Page Web
        </a>
        </div>`
    : "";
  const testsButton = project.testsLink
    ? `<div class="git-link d-flex align-items-center border-start">
        <a href="${project.testsLink}" target="_blank" class="text-decoration-none text-teal">
         <i class="bi-folder-fill ms-2" style="font-size: 2rem;"></i> Tests
 </a>
 </div>`
    : "";
  const auditButton = project.auditLink
    ? `<div class="git-link d-flex align-items-center border-start">
       <a href="${project.auditLink}" target="_blank" class="text-decoration-none text-teal">
        <i class="bi-folder-fill ms-2" style="font-size: 2rem;"></i> Audit
</a>
</div>`
    : "";

  modalContainer.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-teal text-white text-center">
                    <h3 class="modal-title" id="modalLabel-${project.title}">${project.title}</h3>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h4 class="text-decoration-underline">Étapes clés :</h4>
                    <ul>${steps}</ul>
                    <h4 class="text-decoration-underline">Technologies :</h4>
                    <div class="icons d-flex justify-content-around flex-wrap mt-3">
                        ${technologies}
                    </div>
                </div>
                <div class="modal-footer d-flex align-items-center justify-content-center">
                     ${githubButton}
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                      ${liveButton}
                      ${testsButton}
                      ${auditButton}
                </div>
            </div>
        </div>
    `;

  return modalContainer;
}
// Gestion du focus et accessibilité des modales
document.addEventListener("DOMContentLoaded", function () {
  const modals = document.querySelectorAll(".modal");

  modals.forEach((modal) => {
      modal.addEventListener("hidden.bs.modal", function () {
          // Désactive l'interaction avec la modale fermée
          modal.setAttribute("inert", "true");

          // Récupère le bouton qui a ouvert la modale
          const triggerButton = document.querySelector(`[data-bs-target="#${modal.id}"]`);
          if (triggerButton) triggerButton.focus();
      });

      modal.addEventListener("shown.bs.modal", function () {
          // Réactive l'interaction avec la modale ouverte
          modal.removeAttribute("inert");
      });
  });
});
