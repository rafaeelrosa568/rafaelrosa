document.addEventListener('DOMContentLoaded', function() {

    // NAV LINKS HOVER
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => link.style.color = '#00ff99');
        link.addEventListener('mouseout', () => link.style.color = '#e0e0e0');
    });

    // MODAL
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const closeModal = document.getElementsByClassName('close')[0];

    const profilePics = [
        document.getElementById('profilePic'),
        document.getElementById('secondPic')
    ];

    profilePics.forEach(pic => {
        pic.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = pic.src;
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
