export function createProgressBar(skill) {
    // Vérification que l'objet skill est bien défini
    if (!skill || !skill.name || !skill.percentage || !skill.icon) {
        throw new Error(`Invalid skill object: ${JSON.stringify(skill)}`);
    }

    const { name, percentage, icon } = skill;

    // Création du conteneur principal
    const progressBarContainer = document.createElement('div');
    progressBarContainer.classList.add('mb-1', 'p-1', 'bg-white', 'shadow-sm', 'p-2', 'mb-3', 'bg-body', 'rounded');

    // Ajout du contenu HTML
    progressBarContainer.innerHTML = `
        <div class="row align-items-center">
            <div class="col-5 col-sm-4 col-md-3 col-xl-2">
                <div class="d-flex align-items-center">
                    <i class="${icon} fa-2x me-3 text-teal"></i>
                    <p class="fw-bold m-0">${name}</p>
                </div>
            </div>
            <div class="col ms-5">
                <div class="progress">
                    <div class="progress-bar w-${percentage} bg-teal" role="progressbar" aria-valuenow="${percentage}"
                        aria-valuemin="0" aria-valuemax="100">loading
                    </div>
                </div>
            </div>
        </div>
    `;

    return progressBarContainer;
}