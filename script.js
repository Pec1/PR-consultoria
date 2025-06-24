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
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
            1200: { slidesPerView: 5, spaceBetween: 30 },
        },
    });

    // --- CONTROLE DOS MODAIS (POP-UPS) ---

    // Elementos dos Modais
    const vidaModal = document.getElementById("vidaModal");
    const previdenciaModal = document.getElementById("previdenciaModal");
    const corporateModal = document.getElementById("corporateModal");

    // Botões dos Cards de Serviço
    const openVidaBtn = document.getElementById("open-vida-btn");
    const openPrevidenciaBtn = document.getElementById("open-previdencia-btn");
    const openCorporateBtn = document.getElementById("open-corporate-btn");
    
    // --- NOVO: Botões dos Menus Suspensos ---
    const openVidaBtnDropdown = document.getElementById("open-vida-btn-dropdown");
    const openPrevidenciaBtnDropdown = document.getElementById("open-previdencia-btn-dropdown");
    const openCorporateBtnDropdown = document.getElementById("open-corporate-btn-dropdown");

    // Botões de Fechar
    const closeVidaBtn = document.getElementById("close-vida");
    const closePrevidenciaBtn = document.getElementById("close-previdencia");
    const closeCorporateBtn = document.getElementById("close-corporate");

    // Funções genéricas para abrir e fechar modais
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

    // Adiciona os eventos de clique para os botões dos CARDS
    if (openVidaBtn) openVidaBtn.onclick = () => openModal(vidaModal);
    if (openPrevidenciaBtn) openPrevidenciaBtn.onclick = () => openModal(previdenciaModal);
    if (openCorporateBtn) openCorporateBtn.onclick = () => openModal(corporateModal);
    
    // --- NOVO: Adiciona os eventos de clique para os links dos DROPDOWNS ---
    if (openVidaBtnDropdown) openVidaBtnDropdown.onclick = (e) => { e.preventDefault(); openModal(vidaModal); };
    if (openPrevidenciaBtnDropdown) openPrevidenciaBtnDropdown.onclick = (e) => { e.preventDefault(); openModal(previdenciaModal); };
    if (openCorporateBtnDropdown) openCorporateBtnDropdown.onclick = (e) => { e.preventDefault(); openModal(corporateModal); };


    // Adiciona os eventos de clique para os botões de FECHAR
    if (closeVidaBtn) closeVidaBtn.onclick = () => closeModal(vidaModal);
    if (closePrevidenciaBtn) closePrevidenciaBtn.onclick = () => closeModal(previdenciaModal);
    if (closeCorporateBtn) closeCorporateBtn.onclick = () => closeModal(corporateModal);

    // Fecha o modal se o usuário clicar fora da área de conteúdo
    window.onclick = function(event) {
        if (event.target == vidaModal) closeModal(vidaModal);
        if (event.target == previdenciaModal) closeModal(previdenciaModal);
        if (event.target == corporateModal) closeModal(corporateModal);
    }
});