document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const closeModal = document.getElementsByClassName('close')[0];

    // Todas as imagens de perfil que devem abrir modal
    const profilePics = [document.getElementById('profilePic'), document.getElementById('secondPic')];

    profilePics.forEach(pic => {
        pic.addEventListener('click', () => {
            modal.style.display = 'flex';  // mostra modal
            modalImg.src = pic.src;        // coloca a imagem clicada
        });
    });

    // Fecha ao clicar no X
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fecha ao clicar fora da imagem
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
