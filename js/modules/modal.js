/*  MODULE : GESTION DES MODALES  */
export function initModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;

    const overlay = modal.querySelector('.modal-overlay');
    const closeBtn = modal.querySelector('.modal-close');
    const triggerBtns = document.querySelectorAll('.btn-case-study');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body-content');

    // Dictionnaire des contenus d'études de cas
    const caseStudies = {
        tendly: {
            title: "Étude de cas : Tendly (Projet de Soutenance CDA)",
            content: `
                <h3>1. Contexte & Cadrage du Projet</h3>
                <p>Développement de <strong>Tendly</strong>, une application de veille bienveillante dédiée aux proches et aux aidants. Le projet a été sélectionné après une phase de benchmark rigoureuse pour répondre à des problématiques sociétales concrètes (canicules, vieillissement de la population). Il est calibré pour couvrir l'ensemble des compétences professionnelles requises sur une période de 19 semaines.</p>
                
                <h3>2. Architecture & Choix Techniques</h3>
                <ul>
                    <li><strong>Backend :</strong> Choix de <strong>Node.js 24 LTS</strong> (maintenu jusqu'en avril 2028) pour garantir la pérennité de l'application.</li>
                    <li><strong>Langage :</strong> <strong>TypeScript 6.0.3</strong>, épinglé avec précision pour assurer une parfaite compatibilité avec les outils d'analyse statique.</li>
                    <li><strong>Conteneurisation :</strong> Utilisation de <strong>Docker</strong> et Docker Compose sous Windows 11 Pro pour isoler les services et garantir un environnement reproductible.</li>
                    <li><strong>Tests d'API :</strong> Intégration de l'outil <strong>Bruno (v4.2.1)</strong> après vérification de sa licence MIT et de son empreinte cryptographique SHA256.</li>
                </ul>

                <h3>3. Méthodologie & Qualité Logicielle</h3>
                <ul>
                    <li><strong>Sécurité Git :</strong> Authentification par clés SSH (ed25519) et commits signés via l'adresse noreply de GitHub pour préserver la confidentialité.</li>
                    <li><strong>Workflow de Développement :</strong> Utilisation de branches thématiques, de Pull Requests et d'une stratégie de fusion par <em>squash</em> afin de garantir un historique de commit propre et auditable.</li>
                    <li><strong>Qualité de Code :</strong> Configuration stricte de l'environnement avec <strong>ESLint</strong> et <strong>Prettier</strong> pour automatiser le formatage et éliminer toute dette technique.</li>
                </ul>

                <h3>4. Statut du Projet</h3>
                <p><em>Projet académique de fin d'études en cours de réalisation. Le code source est hébergé sur un dépôt privé sécurisé et reste confidentiel jusqu'à la soutenance officielle.</em></p>
            `
        },
        mediconnet: {
            title: "Étude de cas : Mediconnet",
            content: `
                <h3>Objectif du projet</h3>
                <p>Simplifier et sécuriser l'accès aux dossiers de téléconsultation médicale à l'aide de QR Codes uniques.</p>
                <h3>Stack & Sécurité</h3>
                <p>Développé en PHP natif couplé à JavaScript et MySQL, garantissant une architecture claire et modulaire.</p>
            `
        },
        etool: {
            title: "Étude de cas : E-Tool",
            content: `
                <h3>Architecture E-Commerce</h3>
                <p>Mise en place d'une double interface (Back-office administrateur robuste et Front-office client ergonomique).</p>
                <p>Hébergement distant et gestion rigoureuse des bases de données relationnelles.</p>
            `
        },
        labgenius: {
            title: "Étude de cas : LabGenius",
            content: `
                <h3>Approche Bio-Informatique</h3>
                <p>Conception d'un outil web scientifique capable de simuler le séquençage de brins ADN/ARN et d'analyser des acides aminés.</p>
            `
        },
        codons: {
            title: "Étude de cas : Recherche d'Acides Aminés",
            content: `
                <h3>Fonctionnalités clés</h3>
                <p>Algorithmes de conversion de codons génétiques en acides aminés sécurisés par un système d'authentification utilisateur rigoureux.</p>
            `
        }
    };

    function openModal(projectKey) {
        const data = caseStudies[projectKey];
        if (data && modalTitle && modalBody) {
            modalTitle.textContent = data.title;
            modalBody.innerHTML = data.content;
        }
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    triggerBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectKey = btn.getAttribute('data-project');
            openModal(projectKey);
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (overlay) {
        overlay.addEventListener('click', closeModal);
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}