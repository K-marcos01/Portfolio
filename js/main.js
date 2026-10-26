/*  SCRIPT PRINCIPAL (POINT D'ENTRÉE)  */
import { initTheme } from './modules/theme.js';
import { initNavigation } from './modules/navigation.js';
import { initSkillsTabs } from './modules/skills-tabs.js';
import { initProjectsSlider } from './modules/projects-slider.js';
import { initModal } from './modules/modal.js';

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    initSkillsTabs();
    initProjectsSlider();
    initModal();
});