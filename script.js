let doc = document.addEventListener('DOMContentLoaded', () => {

    const navBtn = document.querySelector('.navbtn');

    const heroBtn = document.querySelector('.herobtn');

    const aboutBtn = document.querySelector('.aboutbtn');

    const membershipBtns = document.querySelectorAll('.membership-btn');

    const trainerBtns = document.querySelectorAll('.trainer-btn');

    const whatsappBtn = document.querySelector('.whatsapp-btn');

    const footerJoinBtn = document.querySelector('.footer-join-btn');

    const actionnavbtn = document.querySelector(".popupbox");

    const actionbtn2 = document.querySelector(".popbox");

    const expandabt = document.querySelector(".art");

    let abtclose = document.querySelector(".closebtn");


    function both() {
        let append = actionnavbtn.cloneNode(true);
        actionnavbtn.style.display = 'flex';
        actionbtn2.style.display = 'flex';

        actionnavbtn.addEventListener('click', () => {
            actionnavbtn.style.display = 'none';
            actionbtn2.style.display = 'none';
        });
    }

    function aboutexpand() {
        let abtexp = expandabt.style.display = 'inline';

        let a = abtclose;
        a.addEventListener('click', () => {
            expandabt.style.display = 'none';
            aboutBtn.style.display = 'flex'
        });

        if (aboutBtn) {
            return aboutBtn.style.display = 'none'
        }
      
    }

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
            return both()
        });
    }

    if (heroBtn) {
        heroBtn.addEventListener('click', () => {
            return both()
        });
    }

    if (aboutBtn) {
        aboutBtn.addEventListener('click', () => {
            return aboutexpand()
        });
    }

    membershipBtns.forEach(button => {
        button.addEventListener('click', () => {
            showNotification('Updates coming soon!');
        });
    });

    trainerBtns.forEach(button => {
        button.addEventListener('click', () => {
            showNotification('Updates coming soon!');
        });
    });


    if (footerJoinBtn) footerJoinBtn.addEventListener('click', () => showNotification('Updates coming soon!'));

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
