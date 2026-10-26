/*  MODULE : ONGLETS DE COMPÉTENCES  */
export function initSkillsTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    if (tabBtns.length === 0 || tabPanes.length === 0) return;

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Retirer la classe active de tous les boutons et panneaux
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Ajouter la classe active au bouton cliqué
            btn.classList.add('active');

            // Activer et afficher le panneau correspondant
            const targetTab = btn.getAttribute('data-tab');
            const targetPane = document.getElementById(`tab-${targetTab}`);
            
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });
}