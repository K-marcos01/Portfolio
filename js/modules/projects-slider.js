/*  MODULE : CARROUSEL DE PROJETS  */
export function initProjectsSlider() {
    const track = document.getElementById('projects-track');
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');

    if (!track || !prevBtn || !nextBtn) return;

    const scrollAmount = 360; // Largeur approximative d'une carte + espacement

    prevBtn.addEventListener('click', () => {
        track.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        track.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
}