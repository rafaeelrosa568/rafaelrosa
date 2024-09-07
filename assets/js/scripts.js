document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#00aaff'; // Azul claro ao passar o mouse
        });

        link.addEventListener('mouseout', () => {
            link.style.color = '#f0f0f0'; // Volta à cor original ao remover o mouse
        });
    });

    const formInputs = document.querySelectorAll('form input, form textarea');

    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.borderColor = '#00aaff'; // Azul claro ao focar no campo
        });

        input.addEventListener('blur', () => {
            input.style.borderColor = '#444'; // Volta à cor original ao desfocar
        });
    });

    // Modal logic
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const profilePic = document.getElementById('profilePic');
    const closeModal = document.getElementsByClassName('close')[0];

    profilePic.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = profilePic.src;
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});

// Scripts existentes...

// Script do Lightbox
document.addEventListener('DOMContentLoaded', function() {
    const profilePicture = document.querySelector('.profile-picture');
    const lightbox = document.querySelector('.lightbox');
    const lightboxContent = document.querySelector('.lightbox-content');
    const closeBtn = document.querySelector('.close');

    profilePicture.addEventListener('click', function() {
        lightbox.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});


// Modal logic para a segunda foto lado esquerdo
const secondPic = document.getElementById('secondPic');

secondPic.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = secondPic.src;
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

