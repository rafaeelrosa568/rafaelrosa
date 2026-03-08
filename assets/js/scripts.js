document.addEventListener('DOMContentLoaded', function() {

    // ==========================
    // NAV LINKS HOVER
    // ==========================
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => link.style.color = '#00ff99');
        link.addEventListener('mouseout', () => link.style.color = '#e0e0e0');
    });

    // ==========================
    // FORMULÁRIOS HOVER/FOCUS
    // ==========================
    const formInputs = document.querySelectorAll('form input, form textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => input.style.borderColor = '#00ff99');
        input.addEventListener('blur', () => input.style.borderColor = '#444');
    });

    // ==========================
    // MODAL DE FOTOS
    // ==========================
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const closeModal = document.getElementsByClassName('close')[0];

    // Todas as imagens que abrem o modal
    const profilePics = [
        document.getElementById('profilePic'),
        document.getElementById('secondPic')
    ];

    profilePics.forEach(pic => {
        pic.addEventListener('click', () => {
            modal.style.display = 'flex';    // mostra modal
            modalImg.src = pic.src;          // imagem clicada
        });
    });

    // Fecha o modal ao clicar no X
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fecha o modal ao clicar fora da imagem
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
