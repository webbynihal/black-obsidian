let doc = document.addEventListener('DOMContentLoaded', () => {

    const navBtn = document.querySelector('.navbtn');

    const heroBtn = document.querySelector('.herobtn');

    const aboutBtn = document.querySelector('.aboutbtn');

    const membershipBtns = document.querySelectorAll('.membership-btn');

    const trainerBtns = document.querySelectorAll('.trainer-btn');

    const whatsappBtn = document.querySelector('.whatsapp-btn');

    const footerJoinBtn = document.querySelector('.footer-join-btn');
    
    const notificationBar = document.createElement('div');
    notificationBar.id = 'notification-bar';
    document.body.appendChild(notificationBar);
    
    let notificationTimeout;
    function showNotification(message) {
        notificationBar.textContent = message;
        notificationBar.classList.add('show');
        
        clearTimeout(notificationTimeout);
        notificationTimeout = setTimeout(() => {
            notificationBar.classList.remove('show');
        }, 3000); 
    }

    if (navBtn) {
        navBtn.addEventListener('click', () => {
            showNotification('Paise hai tere paas, Gareeb!! ');
        });
    }

    if (heroBtn) {
        heroBtn.addEventListener('click', () => {
            showNotification('ek baar me samjh nahi ayi');
        });
    }

    if (aboutBtn) {
        aboutBtn.addEventListener('click', () => {
            showNotification('About section ka "Learn More" button click hua!');
        });
    }

    membershipBtns.forEach(button => {
        button.addEventListener('click', () => {
            showNotification('Membership ka "Buy Now" button click hua!');
        });
    });

    trainerBtns.forEach(button => {
        button.addEventListener('click', () => {
            showNotification('Trainer ka "View Profile" button click hua!');
        });
    });

    if (footerJoinBtn) footerJoinBtn.addEventListener('click', () => showNotification('Footer ka "Join Now" button click hua!'));

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-menu li a, .nav-menu .navbtn').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});