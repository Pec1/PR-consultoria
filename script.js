document.addEventListener('DOMContentLoaded', function () {

    // --- LÓGICA DO MENU HAMBURGUER ---
    const menuToggle = document.getElementById('menu-toggle');
    const mainMenu = document.getElementById('main-menu');

    if (menuToggle && mainMenu) {
        menuToggle.addEventListener('click', function () {
            mainMenu.classList.toggle('active');
        });
    }

    // --- INICIALIZAÇÃO DO SLIDER (SWIPER.JS) ---
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
        },
    });

    // --- CONTROLE DOS MODAIS (POP-UPS) ---
    const vidaModal = document.getElementById("vidaModal");
    const openVidaBtn = document.getElementById("open-vida-btn");
    const closeVidaBtn = document.getElementById("close-vida");

    const previdenciaModal = document.getElementById("previdenciaModal");
    const openPrevidenciaBtn = document.getElementById("open-previdencia-btn");
    const closePrevidenciaBtn = document.getElementById("close-previdencia");

    const corporateModal = document.getElementById("corporateModal");
    const openCorporateBtn = document.getElementById("open-corporate-btn");
    const closeCorporateBtn = document.getElementById("close-corporate");

    function openModal(modal) {
        if (modal) {
            modal.style.display = "flex";
        }
    }

    function closeModal(modal) {
        if (modal) {
            modal.style.display = "none";
        }
    }

    if (openVidaBtn) openVidaBtn.onclick = () => openModal(vidaModal);
    if (closeVidaBtn) closeVidaBtn.onclick = () => closeModal(vidaModal);

    if (openPrevidenciaBtn) openPrevidenciaBtn.onclick = () => openModal(previdenciaModal);
    if (closePrevidenciaBtn) closePrevidenciaBtn.onclick = () => closeModal(previdenciaModal);

    if (openCorporateBtn) openCorporateBtn.onclick = () => openModal(corporateModal);
    if (closeCorporateBtn) closeCorporateBtn.onclick = () => closeModal(corporateModal);

    window.onclick = function(event) {
        if (event.target == vidaModal) closeModal(vidaModal);
        if (event.target == previdenciaModal) closeModal(previdenciaModal);
        if (event.target == corporateModal) closeModal(corporateModal);
    }
});