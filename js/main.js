/*SCRIPT PRINCIPAL (POINT D'ENTRÉE)*/
import { initNavigation } from './modules/navigation.js';
import { initSkillsTabs } from './modules/skills-tabs.js';
import { initProjectsSlider } from './modules/projects-slider.js';
import { initModal } from './modules/modal.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialisation des composants UI
    initNavigation();
    initSkillsTabs();
    initProjectsSlider();
    initModal();

    // 2. Initialisation de l'apparition fluide au scroll (Reveal)
    initScrollReveal();
});

/**
 * Gère l'apparition fluide des éléments dotés de la classe .reveal au défilement
 */
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    if (reveals.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Libère l'observateur une fois l'élément affiché
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
    });

    reveals.forEach((el) => observer.observe(el));
}